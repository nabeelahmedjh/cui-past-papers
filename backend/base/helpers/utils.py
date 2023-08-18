from django.urls import reverse
import requests
from base.serializers import ContributorSerializer
from rest_framework import status
from base.models import Submission

def createContributor(data):

    serializer = ContributorSerializer(data=data)

    if serializer.is_valid():
        serializer.save()
        return (serializer.data, status.HTTP_201_CREATED)
    return (serializer.errors, status.HTTP_400_BAD_REQUEST)

def deleteSubmission(submission_id):

    try:
        submission = Submission.objects.get(id=submission_id)

        submission.delete()
        return ({
            'message': 'Past paper deleted successfully'
        }, status.HTTP_200_OK)
    
    except Submission.DoesNotExist:
            
            return ({
            'message': "Past paper doesn't exists"
        }, status.HTTP_404_NOT_FOUND)
