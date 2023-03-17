function getArticleGenerator(articles) {
    let input = articles.slice();

    let result = () => {
        if (input.length === 0) {
            return;
        }
        const container = document.getElementById('content');
        let article = document.createElement('article');
        const text = input.shift();
        article.textContent = text;
        container.appendChild(article);
    }

    return result;

    /*
    // OR with direct return of the function
        return () => {
        if (input.length === 0) {
            return;
        }
        const container = document.getElementById('content');
        let article = document.createElement('article');
        const text = input.shift();
        article.textContent = text;
        container.appendChild(article);
    }
    */
}