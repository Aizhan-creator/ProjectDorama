from django.contrib import admin

from main.models import Dorama, Film, User, Genre, Comment
from rest_framework_jwt.serializers import JSONWebTokenSerializer

@admin.register(Dorama)
class DoramaAdmin(admin.ModelAdmin):
    list_display = ('name', 'episodes', 'mark', 'year', )
    search_fields = ('name',)
    list_filter = ('genres',)


@admin.register(Genre)
class GenreAdmin(admin.ModelAdmin):
    list_display = ('name', )
    search_fields = ('name',)


@admin.register(Film)
class FilmAdmin(admin.ModelAdmin):
    list_display = ('name', 'mark', 'year', )
    search_fields = ('name',)


# admin.site.register(User)
@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('user_instance', 'get_liked_dorams')

    def get_liked_dorams(self, obj):
        return [dorama.name for dorama in obj.liked_dorams.all()]


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ('user', 'dorama', 'body')
