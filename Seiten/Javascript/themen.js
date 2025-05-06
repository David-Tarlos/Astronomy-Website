function filterArticles() {
    let searchQuery = document.getElementById('searchInput').value.toLowerCase();

    let articles = document.querySelectorAll('.article');

    articles.forEach(function(article) {
        let title = article.querySelector('h2').innerText.toLowerCase();
        let description = article.querySelector('p').innerText.toLowerCase();

        if (title.includes(searchQuery) || description.includes(searchQuery)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}