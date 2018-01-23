from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .models import Post

class PostForm(forms.ModelForm):

    class Meta:
        model = Post
        fields = ('title', 'text',)

class NameForm(forms.Form):
    model = Post
    field = "name"
    your_name = forms.CharField(label='Your name', max_length=100)

class NewUser(UserCreationForm):
    email = forms.EmailField(required=True)
    first_name = forms.CharField(label='First Name', min_length=2, required=True)
    last_name = forms.CharField(label='Last Name', min_length=2, required=True)
    #birthday = forms.choices(max_length=9,choices=Months_Choices, default = January label='Birthday', required=True)

    class Meta:
        model = User
        fields = ('first_name','last_name', 'username', 'email', 'password1', 'password2')

    def save(self, commit=True):
        user = super(NewUser, self).save(commit=False)
        user.email = self.cleaned_data['email']
        # last_name = self.cleaned_data.get['last_name']
        # username = self.cleaned_data.get['username']
        if commit:
            user.save()
        return user