from django.db import models

# Create your models here.

class Alert(models.Model):

    time = models.DateTimeField(
        null=False,
        blank=False
    )
    location_latitude= models.FloatField(
        null=False,
        blank=False,
        max_length=50
    )
    location_longitude= models.FloatField(
        null=False,
        blank=False,
        max_length=50
    )

