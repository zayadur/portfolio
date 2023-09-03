document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to the <ul> element
    const articleList = document.getElementById("articles");

    // Function to fetch and add articles to the list
    function fetchAndAddArticles() {
        // Use an AJAX request to fetch the list of article files
        const xhr = new XMLHttpRequest();
        xhr.open("GET", 'articles/', true);

        xhr.onload = function () {
            if (xhr.status === 200) {
                // Split the response into lines to extract article file names
                const articleFileNames = xhr.responseText.split("\n");

                // Loop through the file names and create <li> elements with <a> links
                articleFileNames.forEach((fileName) => {
                    if (fileName.trim() !== "") {
                        const listItem = document.createElement("li");
                        const link = document.createElement("a");
                        link.href = `articles/${fileName}`;
                        link.textContent = fileName.replace(/\.[^/.]+$/, "");

                        listItem.appendChild(link);
                        articleList.appendChild(listItem);
                    }
                });
            } else {
                console.error("Error fetching articles:", xhr.statusText);
            }
        };

        xhr.onerror = function () {
            console.error("Network error while fetching articles.");
        };

        // Send the request
        xhr.send();
    }

    // Call the function to fetch and add articles
    fetchAndAddArticles();
});
