from django.db import models

# Create your models here.

class Alert(models.Model):

    time = models.DateTimeField(
        null=False,
        blank=False
    )
    location = models.CharField(
        null=False,
        blank=False,
        max_length=50
    )

