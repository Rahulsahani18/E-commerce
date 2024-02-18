// functions for dynamically generating headers and footers
 function loadContent(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

// Function to generate and inject the header dynamically
function generateHeader() {
    loadContent('header1.html', function (content) {
        const headerDiv = document.createElement('div');
        headerDiv.innerHTML = content;
        document.body.prepend(headerDiv);
    });
}

// Function to generate and inject the footer dynamically
function generateFooter() {
    loadContent('footer.html', function (content) {
        const footerDiv = document.createElement('div');
        footerDiv.innerHTML = content;
        document.body.appendChild(footerDiv);
    });
}

// Call the functions to generate header and footer
generateHeader();
generateFooter();

