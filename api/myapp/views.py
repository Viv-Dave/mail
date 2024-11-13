from django.http import JsonResponse
from django.core.serializers import serialize
from django.shortcuts import render

from django.shortcuts import render
from .models import Task
def home(request):
    return render(request, "myapp/home.html")


def get_data(request):
    task_data = Task.objects.all().values("title", "description")  
    return JsonResponse(list(task_data), safe=False) 

# def delete(request):
