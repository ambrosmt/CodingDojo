from django.shortcuts import render, HttpResponse, redirect

def landing(request):
    html = open ('projectApps/blogs/templates/blogs/index.html')
    return HttpResponse(html)
