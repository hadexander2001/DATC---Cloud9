from rest_framework import serializers

from .models import Alert

class AlertSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alert
        fields = ['id', 'time', 'location_latitude', 'location_longitude']