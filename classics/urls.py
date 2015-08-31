from django.conf.urls import patterns, include, url
from django.contrib import admin
from classics.views import home
from classics.apps.books.views import library, bookshelf, book

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'classics.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^$', home),
    url(r'^library/', library),
    url(r'^bookshelf/', bookshelf),
    url(r'^book/', book)

)
