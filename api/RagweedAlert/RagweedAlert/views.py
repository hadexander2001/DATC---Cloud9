from django.http import JsonResponse
from .models import RagweedAlert
from .serializers import RagweedAlertSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])

def alert_list(request, format=None):
    # get all alerts
    # serialize
    # return JSON
    if request.method == 'GET':
        alerts = RagweedAlert.objects.all()
        serializer = RagweedAlertSerializer(alerts, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = RagweedAlertSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def alert_detail(request, id, format=None):
    try:
        alert = RagweedAlert.objects.get(pk=id)
    except RagweedAlert.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = RagweedAlertSerializer(alert)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RagweedAlertSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        alert.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)