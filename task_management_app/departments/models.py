from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
User = get_user_model()

class Department(models.Model):
    name = models.CharField(max_length=100)
    manager = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="managed_department")

    def __str__(self):
        return self.name
