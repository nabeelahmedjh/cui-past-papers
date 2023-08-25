import requests
import json
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse, HttpResponse
from django.db.models import Count, Q
from django.core import exceptions

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.pagination import PageNumberPagination


from .models import Contributor, PastPaper, Submission
from .serializers import ContributorSerializer, SubmissionSerializer, PastPaperSerializer


from .helpers.utils import createContributor, deleteSubmission, getOrderByFields, paginateResponse

# Create your views here.


class DefaultPagination(PageNumberPagination):
    page_size = 12
    page_size_query_param = 'page_size'
    max_page_size = 50


class SubmissionView(APIView):


    def get(self, request):
        submissions = Submission.objects.all()

        serializer = SubmissionSerializer(submissions, many=True)
        return Response(serializer.data)



    def post(self, request):
        
        serializer = SubmissionSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    


class SubmissionDetailView(APIView):


    def delete(self, request, pk):


        response = deleteSubmission(pk)

        return Response(response[0], status=response[1])



class ContributorView(APIView):

    pagination_class = DefaultPagination

    def get(self, request):


        order_by_param = request.GET.get('order_by', 'name')
        allowed_fields = ['name', 'email', 'linkedIn', 'contribution_count']

        order_by_fields = getOrderByFields(order_by_param, allowed_fields=allowed_fields)


        contributors = Contributor.objects.annotate(contribution_count=Count('pastpaper')).order_by(*order_by_fields)

        paginated_response = paginateResponse(request, contributors, self.pagination_class, ContributorSerializer)

        return Response(paginated_response, status=status.HTTP_200_OK)


    def post(self, request):

        response = createContributor(data=request.data)
        serializer = ContributorSerializer(data=request.data)

        return Response(response[0], status=response[1])



class PaperPaperView(APIView):


    pagination_class = DefaultPagination

    def post(self, request):


        try:
            submission = Submission.objects.get(id=request.data.get('submission_id', ''))
        except Submission.DoesNotExist:
            return Response({
                'message': "submission_id is not given or is not valid"
            }, status=status.HTTP_400_BAD_REQUEST)

        
        try:
            contributor = Contributor.objects.get(email=submission.email)

        except Contributor.DoesNotExist:

            response = createContributor(data={
                'name': submission.name,
                'email': submission.email,
                'linkedIn': submission.linkedIn
            })

            if response[1] == status.HTTP_400_BAD_REQUEST:
                return Response(response[0], status=response[1])
            
        # think of a better approch
        request.POST._mutable = True
        request.data['submitted_by'] = Contributor.objects.get(email=submission.email).id
        request.data['file'] = submission.file
        
        serializer = PastPaperSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            response = deleteSubmission(submission_id=submission.id)

            if response[1] == status.HTTP_400_BAD_REQUEST:
                return Response(response[0], status=response[1])

            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



    def get(self, request):

        search_query = request.GET.get('search', '')
        order_by_param = request.GET.get('order_by', '-uploaded_at')
        allowed_fields = ['id', 'course_code', 'course_title', 'instructor_name', 'year', 'campus', 'uploaded_at', 'exam_type', 'submitted_by']

        order_by_fields = getOrderByFields(order_by_param, allowed_fields=allowed_fields, default_field='-uploaded_at')

        pastpapers = PastPaper.objects.filter(
            Q(course_code__icontains=search_query)|
            Q(course_title__icontains=search_query) |
            Q(instructor_name__icontains=search_query)|
            Q(year__icontains=search_query) |
            Q(campus__icontains=search_query) |
            Q(exam_type__icontains=search_query)
        ).order_by(*order_by_fields)

        paginated_response = paginateResponse(request, pastpapers, self.pagination_class, PastPaperSerializer)

        return Response(paginated_response, status=status.HTTP_200_OK)
    
    
