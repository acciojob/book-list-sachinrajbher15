const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookList = document.querySelector('.book-list');

submitBtn.addEventListener('click', (event) => {

	// Prevent form submission
	event.preventDefault();
	
	// Get values from the input fields
	const title = titleInput.value;
	const author = authorInput.value;
	const isbn = isbnInput.value;

	// Validate inputs
	if (title === '' || author === '' || isbn === '') {
		alert("Please fill in all the information");
		return;
	}

	// Create new table row
	const row = document.createElement('tr');
	row.innerHTML = `
		<td>${title}</td>
		<td>${author}</td>
		<td>${isbn}</td>
		<td><button class="delete">X</button></td>
	`;
	bookList.appendChild(row);

	// Clear input fields after adding the book
	titleInput.value = '';
	authorInput.value = '';
	isbnInput.value = '';

	// Add event listener to the delete button
	row.querySelector('.delete').addEventListener('click', (e) => {
		// Confirm before deleting
		// if (confirm("Are you sure you want to delete this book?")) {
			e.target.parentElement.parentElement.remove(); // Remove the entire row
		// }
	});
});