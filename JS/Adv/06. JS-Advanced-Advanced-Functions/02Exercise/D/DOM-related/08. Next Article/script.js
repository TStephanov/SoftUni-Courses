function getArticleGenerator(articles) {
    return () => {
        if (articles.length > 0) {
            let articleText = articles.shift();
            let contentElement = document.getElementById('content');
            let articleElement = document.createElement('article');
            articleElement.textContent = articleText;
            contentElement.appendChild(articleElement);

        }
    }
}
