function notify(message) {
    let notificationElement = document.getElementById('notification');
    notificationElement.addEventListener('click', (event) => {
        event.target.style.display = 'none';
    });
    if (typeof message === 'string') {
        notificationElement.textContent = message;
        notificationElement.style.display = 'block';
    }
}