from rest_framework import serializers

from .models import RagweedAlert

class RagweedAlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = RagweedAlert
        fields = ['id', 'date', 'location']