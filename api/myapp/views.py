from django.http import JsonResponse

from django.shortcuts import render

from django.shortcuts import render

def home(request):
    return render(request, "myapp/home.html")


def get_data(request):
    data = {
        "message": "Hello from the backend!",
        "items": ["Item 1", "Item 2", "Item 3"]
    }
    return JsonResponse(data)
