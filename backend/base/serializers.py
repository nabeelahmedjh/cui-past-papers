from rest_framework import serializers
from .models import Contributor, Submission, PastPapar



class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'


class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributor
        fields = '__all__'

        extra_kwargs = {
            'linkedIn': {
                'required': True
            }
        }

class PastPaperSerializer(serializers.ModelSerializer):

    class Meta:
        model = PastPapar
        fields = '__all__'

        extra_kwargs = {
            'submitted_by': {
                'required': True
            }
        }