from django.shortcuts import render


def index(request):
    return render(request, "app/index.html")

def hex(request):
    return render(request, "app/hex.html")
