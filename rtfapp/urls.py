# urls.py
from django.urls import path
from .views import YourModelListCreateView, YourModelRetrieveUpdateDeleteView

urlpatterns = [
    path('your-models/', YourModelListCreateView.as_view(), name='yourmodel-list-create'),
    path('your-models/<int:pk>/', YourModelRetrieveUpdateDeleteView.as_view(), name='yourmodel-retrieve-update-delete'),
]
