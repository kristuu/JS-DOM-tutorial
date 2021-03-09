var books = document.querySelectorAll('#book-list li .name');

// books is a NodeList (querySelectorAll converts a list to NodeList), which does not have to be converted with Array.from(books), but can be
books.forEach(function(book){
    book.textContent += ' (book title)';
});

const bookList = document.querySelector('#book-list');
bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>'