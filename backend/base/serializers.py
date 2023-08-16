from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from .models import Contributor, Submission, PastPapar



class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'


class ContributorSerializer(serializers.ModelSerializer):


    # name = serializers.CharField(
    #     validators=[
    #         UniqueValidator(queryset=Contributor.objects.all())
    #     ]
    # )

    class Meta:
        model = Contributor
        fields = '__all__'

        extra_kwargs = {
            'linkedIn': {
                'required': True
            }
        }


    def validate_name(self, value):
        modified_value = value.lower()
        contributor_exists = Contributor.objects.filter(name__iexact=value).exists()

        if contributor_exists:
            raise serializers.ValidationError("This name is already in use.")

        return modified_value
    


class PastPaperSerializer(serializers.ModelSerializer):

    class Meta:
        model = PastPapar
        fields = '__all__'

        extra_kwargs = {
            'submitted_by': {
                'required': True
            }
        }


    # def validate_submitted_by(self, value):
    #     contributor = Contributor.objects.get(name__iexact=value)
    #     return contributor.id