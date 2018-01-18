from django.shortcuts import render, HttpResponse, redirect
from django.utils.crypto import get_random_string

def index(request):
    visit_count = request.session.get('visit_count', 0)
    request.session['visit_count'] = visit_count +1
    html = "rWord_template/index.html"
    data = {
       "word" : get_random_string(length=14)
    } 
    return render(request, html, data)