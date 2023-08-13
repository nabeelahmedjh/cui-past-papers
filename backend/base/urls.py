from django.urls import path
from . import views

urlpatterns = [
    path('contributions/',views.ContributionsView.as_view(), name='contributions')
]