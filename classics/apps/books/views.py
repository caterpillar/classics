from django.shortcuts import render
from django.shortcuts import render_to_response

# Create your views here.


def library(request):
    book_count_list = range(100)
    return render_to_response('books/library.html', {'book_count_list': book_count_list})