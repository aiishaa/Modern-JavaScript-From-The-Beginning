// Book Constructor
function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor
function UI() {}

// Add book to list
UI.prototype.addBookToList = function(book){
    const list = document.getElementById('book-list');

    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `<td> ${book.title} </td>
                     <td> ${book.author} </td>
                     <td> ${book.isbn} </td>
                     <td> <a href = "#" class = "delete"> X </a></td>`;
    list.appendChild(row);
    console.log(row);
}

// Show alert
UI.prototype.showAlert = function(message, className){
    // Create div
    const div = document.createElement('div');

    // Add class name
    div.className = `alert ${className}`;

    // Add text node
    div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector('.container');

    // Get form
    const form = document.querySelector('#book-form');

    // Insert alert
    container.insertBefore(div, form);

    // time out after 3 seconds
    setTimeout(function(){
        document.querySelector('.alert').remove()
    }, 3000);
}

// Delete a book
UI.prototype.deletBook = function(target){
    if(target.className == "delete"){
        target.parentElement.parentElement.remove();
    }
}

// CLear fields
UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
}

// Event Listeners

// Event listener to add a book
document.getElementById('book-form').addEventListener('submit', 
    function(e){
        const title = document.getElementById('title').value,
              author = document.getElementById('author').value,
              isbn = document.getElementById('isbn').value;

        // Instantiating a book
        const book = new Book(title, author, isbn);

        // Instantiating UI
        const ui = new UI();

        // validate input
        if(title === '' || book === '' || isbn === ''){
            // Error alert
            ui.showAlert('Please fill in all fields', 'error');
        } else{
            // Add a book to list
            ui.addBookToList(book);

            // Show success
            ui.showAlert('Book Added!', 'success');

            // Clear fields
            ui.clearFields();
        }

        e.preventDefault();
}) ;

// Event listener to delete a book
document.getElementById('book-list').addEventListener('click', 
    function(e){
        // Instantiating UI
        const ui = new UI();
        ui.deletBook(e.target);

        // Show alert
        ui.showAlert('Book Removed!', 'success');

        e.preventDefault();
});