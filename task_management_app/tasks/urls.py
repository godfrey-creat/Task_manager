from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet, DepartmentViewSet, UserViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)
router.register(r'departments', DepartmentViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
        path('', include(router.urls)),
        ]
