from django.conf.urls import url, include
from . import views
urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'test$', views.test),
    url(r'^accounts/create$', views.create),
    url(r'^post/new/$', views.post_new, name='post_new'),
    url(r'^accounts/register$', views.register, name='register'),
    url(r'^accounts/validate$', views.validate, name='validate'),
]
urlpatterns += [
    url('accounts/', include('django.contrib.auth.urls'))
]