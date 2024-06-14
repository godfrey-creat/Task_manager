from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.
class Employee(AbstractUser):
    is_manager = models.BooleanField(default=False)
