from django.urls import path
from . import views

urlpatterns = [
    path('submissions/',views.SubmissionView.as_view(), name='submissions'),
    path('submissions/<int:pk>',views.SubmissionDetailView.as_view(), name='submission-detail'),
    path('past-papers/',views.PaperPaperView.as_view(), name='past-papers'),


    path('contributions/', views.ContributionsView.as_view(), name='contributions')
    # path('submissions/',views.ContributionsView.as_view(), name='submissions')
]