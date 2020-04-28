// Listen for form submit

document.getElementById('myForm').addEventListener('submit', saveBookmark);
// Save Bookmark
function saveBookmark(e) {
	// Get form values

	var siteName = document.getElementById('siteName').value;
	var siteUrl = document.getElementById('siteUrl').value;

	if(!validateForm(siteName, siteUrl)) {
		return false;
	}

	var bookmark = {
		name: siteName,
		url: siteUrl
	};

	// Local Storage Test

	// localStorage.setItem('test', 'Hello world!');
	// console.log(	localStorage.getItem('test'));
	// // Удалить итем из локала
	// localStorage.removeItem('test')


// test if bookmarks in sull
if(localStorage.getItem('bookmarks') === null) {
		// Init array
		var bookmarks = [];
		// add to array
		bookmarks.push(bookmark);
		// set to LocalStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	} else {
		// Get bookmarks from LocalStorage
		var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
		// add bookmark to arrray 
		bookmarks.push(bookmark);
		// Re-set back to LocalStorage
		localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
	}

	// Clear form
	document.getElementById('myForm').reset();

	// Re-fetch bookmarks
	fetchBookmarks();
	
	// Prevent form from submitting
	e.preventDefault();
}

// Delete bookmark

function deleteBookmark(url) {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
	// Loop throught bookmarks
	for(var i = 0; i < bookmarks.length; i++) {
		if(bookmarks[i].url == url) {
			// Remove from array
			bookmarks.splice(i, 1);
		}
	}
	// Re-set back to LocalStorage
	localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

	// Re-fetch bookmarks
	fetchBookmarks();

}

// Fetch bookmarks

function fetchBookmarks() {
	// Get bookmarks from LocalStorage
	var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

	// Get output id
	var bookmarkResults = document.getElementById('bookmarkResults');

	// build output
	bookmarkResults.innerHTML = '';
	for (let i = 0; i < bookmarks.length; i++) {
		var name = bookmarks[i].name;
		var url = bookmarks[i].url;
		bookmarkResults.innerHTML += '<div class="row">'+ '<div class="col-xl-8">'+ '<h3>' +name+ '</h3>' + 
		 '</div>' + '<div class="col-xl-4">'+ ' <a class="btn btn-success" target="_blank" href="'+url+'">Посетить</a>' + 
		'<a onclick = "deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Удалить</a>'
		+ '</div>' + '</div>';
	}
}

// Validate Form
function validateForm(siteName, siteUrl) {
	if(!siteName || !siteUrl) {
		alert('Please fill in the form');
		return false;
	}

	var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	var regex = new RegExp(expression);

	if(!siteUrl.match(regex)) {
		alert('Please use a valid url');
		return false;
	}

	return true;

}