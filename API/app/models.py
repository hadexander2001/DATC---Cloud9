from django.db import models

# Create your models here.

class Alert(models.Model):

    location = models.CharField(
        null=False,
        blank=False,
        max_length=50
    )

    time = models.DateTimeField(
        null=False,
        blank=False
    )
