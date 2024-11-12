from django.http import JsonResponse

def get_data(request):
    data = {
        "message": "Hello from the backend!",
        "items": ["Item 1", "Item 2", "Item 3"]
    }
    return JsonResponse(data)
