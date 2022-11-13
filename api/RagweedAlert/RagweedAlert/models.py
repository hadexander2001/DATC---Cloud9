from django.db import models

class RagweedAlert(models.Model):
    date = models.DateTimeField()
    location = models.CharField(max_length=500)
