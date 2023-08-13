from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


from .models import Contribution
from .serializers import ContributionSerializer

# Create your views here.
class ContributionsView(APIView):

    def get(self, request):
        contributions = Contribution.objects.all()

        serializer = ContributionSerializer(contributions, many=True)
        return Response(serializer.data)


    def post(self, request):

        serializer = ContributionSerializer(data=request.data)
        
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
