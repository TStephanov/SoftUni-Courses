function toggle() {
    let button = document.querySelector('span.button');
    let text = document.querySelector('#extra');
    
    if (button.textContent === 'More') {
      // console.log(button.textContent);
      // console.log(text.style.display);
      button.textContent = 'Less';
      text.style.display = 'block';
    } else {
      button.textContent = 'More';
      text.style.display = 'none';
    }
}