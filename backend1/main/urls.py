from django.urls import path

from main.views import *

urlpatterns = [
    path('dorama/', dorama_list),
    path('dorams/<str:dorama_name>/', dorama_info),
    path('films/', film_list),
    path('comments/', CommentAPIView.as_view()),
    path('user/', UserAPIView.as_view())
]
