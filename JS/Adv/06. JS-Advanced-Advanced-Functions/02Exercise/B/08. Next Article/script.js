function getArticleGenerator(articles) {
    let ourArticles = articles.slice();
    let contentElement = document.querySelector('#content');
    
    function print() {
        if (ourArticles.length !== 0) {
            const currentText = ourArticles.shift();
            let newArticle = document.createElement('article');
            newArticle.textContent = currentText;
            contentElement.appendChild(newArticle);
        }
    }

    return print;
}