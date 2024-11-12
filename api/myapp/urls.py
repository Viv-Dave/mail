from django.urls import path
from .views import get_data
from myapp import views
urlpatterns = [
    path('api/data/', get_data, name='get_data'),
    path('', views.home, name='home'),
]
