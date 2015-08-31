from django.shortcuts import render
from django.shortcuts import render_to_response


# Create your views here.


def library(request):
    book_count_list = range(20)
    return render_to_response('books/library.html', {'book_count_list': book_count_list})


def bookshelf(request):
    book_count_list = range(18)
    return render_to_response('books/bookshelf.html', {'book_count_list': book_count_list})


def book(request):
    return render_to_response('books/book.html')
