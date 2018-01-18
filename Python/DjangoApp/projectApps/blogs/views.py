'''
6)

views methods generated automatically 

'''

# import methods to be used i.e. HttpResponse and redirect

from django.shortcuts import render, HttpResponse, redirect

# Create your views here.

def index(request):
#define your method
    response = "Hello! I'm your placeholder for a list of blog stuff"
    #set parameters for response
    return HttpResponse(response)
    #return the http response (please ... if you don't nothing happens)

def new(request):
    response = "Welcome! This is where you will start your blog journey with a bloggy form"
    return HttpResponse(response)

def create(request):
    print "you did the thing that sent me back"
    return redirect('/')

def show(request, number):
    return HttpResponse("nice you've reached blog #" + number)

def edit(request, number):
    return HttpResponse('Oh boy, Blogo ' + number + ' is gonna get edited!?!')

def destroy(request, number):
    print ('... X_X ... Blog ' + number + ' has been deleted.')
    return redirect('/')