// Again, SoftUni forum, colleagues solution helped: https://softuni.bg/forum/30364/05-highlight-active
function focused() {
    let divElements = document.querySelectorAll('div div');
    
    [...divElements].forEach(div => {
        div.getElementsByTagName('input')[0].addEventListener('focus', focus);
    });

    [...divElements].forEach(div => {
        div.getElementsByTagName('input')[0].addEventListener('blur', blur);
    });

    function focus(e) {
        e.target.parentNode.classList.add('focused');
    }

    function blur(e) {
        e.target.parentNode.classList.remove('focused');
    }
}