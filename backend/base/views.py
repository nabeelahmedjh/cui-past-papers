from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import Contributor
from .serializers import ContributorSerializer, SubmissionSerializer

# Create your views here.


class SubmissionView(APIView):

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
        pass

    def get(self, request):
        pass


class ContributionsView(APIView):

    def get(self, request):
        contributions = Contributor.objects.all()

        serializer = ContributorSerializer(contributions, many=True)
        return Response(serializer.data)


    # def post(self, request):

    #     serializer = ContributionSerializer(data=request.data)
        
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
