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



def getOrderByFields(order_by_param, allowed_fields, default_field='name'):
        
        order_by_fields = order_by_param.split(',')
        order_by_fields = [field for field in order_by_fields if field.lstrip('-') in allowed_fields]

        if not order_by_fields:
            order_by_fields = [default_field]
        
        return order_by_fields


def paginateResponse(request, queryset, pagination_class, serializer):

    paginator = pagination_class()
    paginated_queryset = paginator.paginate_queryset(queryset, request)
    serializer = serializer(paginated_queryset, many=True)

    response_data = {
        'count': paginator.page.paginator.count,
        'previous': paginator.get_previous_link(),
        'next': paginator.get_next_link(),
        'results': serializer.data
    }
    return response_data