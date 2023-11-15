function getArticleGenerator(articles) {
    return () => {
        if (articles.length > 0) {
            let articleText = articles.shift();
            let contentElement = document.getElementById('content');
            let newArticleElement = document.createElement('article');
            newArticleElement.textContent = articleText;
            contentElement.appendChild(newArticleElement);
        }
    }
}
