from datetime import timedelta

INSTALLED_APPS = [

        ...,
        'rest_framework',
        'rest_framework_simplejwt',
        'departments',
        'employees',
        'tasks',
        ...

        

]

REST_FRAMEWORK = {
        'DEFAULT_AUTHENTICATION_CLASSES': (
            'rest_framework_simplejwt.authentication.JWTAuthentication',
            ),
        }

SIMPLE_JWT = {
        
        'ACCESS_TOKEN_LIFETIME': timedelta(minutes=5),
        'REFRESH_TOKEN_LIFETIME': timedelta(days=1),
        

        }
