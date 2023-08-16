import requests
import json
from django.shortcuts import render
from django.urls import reverse
from django.http import JsonResponse, HttpResponse

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import Contributor, PastPapar, Submission
from .serializers import ContributorSerializer, SubmissionSerializer, PastPaperSerializer

# Create your views here.


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
        return Response(serializer.error, status=status.HTTP_400_BAD_REQUEST)
    

    


class SubmissionDetailView(APIView):


    def delete(self, request, pk):
        pass



class PaperPaperView(APIView):


    def post(self, request):
        # for creating a contributor first
        # submission = Submission.objects.filter(name=request.data.get('submitted_by', ''))

        
        contributor = Contributor.objects.filter(name=request.data.get('submitted_by', ''))

        if not contributor.exists():

            # Retrieve the relative URL using the name and prepend the scheme
            url = request.build_absolute_uri(reverse('contributors'))
            
            response = requests.post(url, data={
                'name': request.data.get('submitted_by'),
                'linkedIn': request.data.get('linkedIn')
            })

            if response.status_code == 400:

                # response_decoded = response.content.decode('utf-8')

                return Response(response)
        

        contributor = Contributor.objects.get(name=request.data.get('submitted_by'))
        print(contributor.id)
        request.data['submitted_by'] = contributor.id


        serializer = PastPaperSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def get(self, request):
        pastpapers = PastPapar.objects.all()

        serializer = PastPaperSerializer(pastpapers, many=True)
        return Response(serializer.data)


class ContributorView(APIView):

    def get(self, request):
        contributors = Contributor.objects.all()

        serializer = ContributorSerializer(contributors, many=True)
        return Response(serializer.data)


    def post(self, request):

        serializer = ContributorSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
