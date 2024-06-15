from django.db import models
from django.contrib.auth.models import AbstractUser
#from django.contrib.auth import get_user_model
#from departments.models import Department

# Create your models here.
#User = get_user_model()

class User(AbstractUser):
    is_managef = models.BooleanField(default=False)

class Department(models.Model):
    name = models.CharField(max_length=100)
    manager = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="managed_department")

class Task(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    due_date = models.DateTimeField()
    is_completed = models.BooleanField(default=False)
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tasks")
    department = models.ForeignKey(Department, on_delete=models.CASCADE, related_name="tasks")
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name="created_task")

    def __str__(self):
        return self.title
