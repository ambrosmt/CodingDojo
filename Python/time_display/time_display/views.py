from django.shortcuts import render, HttpResponse, redirect
from time import localtime, strftime

def index(request):
    html = "clock_template/index.html"
    data = {
    "date" : strftime("%b %d, %Y", localtime()),
    "time" : strftime("%I:%M %p", localtime())
    }
    return render(request, html, data)