from rest_framework import serializers
from .models import Contribution

class ContributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contribution
        fields = '__all__'
        extra_kwargs = {
            'file': {
                'write_only': True
            }
        }