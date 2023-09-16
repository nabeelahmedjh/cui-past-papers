from django.urls import path
from . import views

urlpatterns = [
    path('submissions/',views.SubmissionView.as_view(), name='submissions'),
    path('submissions/<int:pk>',views.SubmissionDetailView.as_view(), name='submission-detail'),

    
    path('past-papers/',views.PastPaperView.as_view(), name='past-papers'),
    path('past-papers/<int:pk>',views.PastPaperDetailView.as_view(), name='past-papers-detail'),


    path('contributors/', views.ContributorView.as_view(), name='contributors')
    # path('submissions/',views.ContributionsView.as_view(), name='submissions')
]