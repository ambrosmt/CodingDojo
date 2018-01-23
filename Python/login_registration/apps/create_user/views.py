from django.shortcuts import render, HttpResponse, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import UserCreationForm
from .forms import PostForm, NameForm, NewUser

def test(request):
    route = "create_user_template/test.html"
    return render(request, route)

def index(request):
    route = "create_user_template/index.html"
    return render(request, route)

def create(request):
    route = "create_user_template/create.html"
    return render(request,route)

def validate(request):
    print "I am in views trying to post data"
    form = NewUser(request.POST)
    if form.is_valid():
        form.save()
        first_name = form.cleaned_data.get('first_name')
        last_name = form.cleaned_data.get('last_name')
        username = form.cleaned_data.get('username')
        raw_password = form.cleaned_data.get('password1')
        email = form.cleaned_data.get('email')
        user = authenticate(username=username, password=raw_password)
        login(request, user)
        print 'you have submited data'
        return redirect('/accounts/login')
    else:
        print "form did not post"
        return render(request, 'create_user_template/create.html', {'form': form})

def register(request):
    print "I am in views creating a form"
    form = NewUser()
    return render(request, 'create_user_template/create.html', {'form': form})

def post_new(request):
    form = PostForm()
    print 'i am in views'
    return render(request, 'create_user_template/post_edit.html', {'form': form})