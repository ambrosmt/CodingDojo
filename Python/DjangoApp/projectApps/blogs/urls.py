'''

5) 

create route file

'''
from django.conf.urls import url
from . import views              # This line is new!
urlpatterns = [
    url(r'^blogs', views.index),     # This line has changed!
    url(r'^new', views.new),
    url(r'^create', views.create),
    url(r'^(?P<number>\d+)', views.show),
    url(r'^edit/(?P<number>\d+)', views.edit),
    url(r'^delete/(?P<number>\d+)', views.destroy)
]