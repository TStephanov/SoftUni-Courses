class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this.online = false;
        () => {
            if (this.online === true) {
                console.log('Set to true');
            } else {
                console.log('It\'s false');
            }
        }
    }

    render(string) {
        let newArticleElement = document.createElement('article');
        let newDivTitleElement = document.createElement('div');
        newDivTitleElement.classList.add('title');
        newDivTitleElement.textContent = `${this.firstName} ${this.lastName}`;
        let newButtonElement = document.createElement('button');
        newButtonElement.textContent = 'I'; // TO DO correct content
        newButtonElement.addEventListener('click', (e) => {
            let elementToShowHide = e.target.parentNode.parentNode.querySelector('.info');
            if (elementToShowHide.getAttribute('style').includes('none')) {
                elementToShowHide.setAttribute('style', 'display: block');
            } else {
                elementToShowHide.setAttribute('style', 'display: none');
            }
        });
        newDivTitleElement.appendChild(newButtonElement);
        newArticleElement.appendChild(newDivTitleElement);

        let newDivInfoElement = document.createElement('div');
        newDivInfoElement.classList.add('info');
        newDivInfoElement.style.display = 'none'
        let newSpanPhoneElement = document.createElement('span');
        newSpanPhoneElement.textContent = 'icon' + ' ' + this.phone;
        let newSpanEmailElement = document.createElement('span');
        newSpanEmailElement.textContent = 'icon' + ' ' + this.email;
        newDivInfoElement.appendChild(newSpanPhoneElement);
        newDivInfoElement.appendChild(newSpanEmailElement);
        newArticleElement.appendChild(newDivInfoElement);

        // Main element to attach new elements to
        let elementToAppendTo = document.getElementById(string);
        elementToAppendTo.appendChild(newArticleElement);
    }
}


let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);

const testBtn = document.querySelector('#test-button');
testBtn.addEventListener('click', () => {
    console.log('functionCalled');
    contacts.forEach(c => c.render('main'));
});