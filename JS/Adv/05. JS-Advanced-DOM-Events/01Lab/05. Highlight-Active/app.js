function focused() {
    let divElements = document.querySelectorAll('div div');

    for (let div of divElements) {
        let inputElement = div.querySelector('input[type="text"]');
        
        inputElement.addEventListener('mousemove', (e) => {
            inputElement.parentNode.classList.remove('blurred');
            inputElement.parentNode.classList.add('focused');
        });
        
        inputElement.addEventListener('mouseout', (e) => {
            inputElement.parentNode.classList.remove('focused');
            inputElement.parentNode.classList.add('blurred');
        });
    }
}

document.body.innerHTML = `
<div>
        <div>
            <h1>Section 1</h1><input type="text" />
        </div>
        <div>
            <h1>Section 2</h1><input type="text" />
        </div>
        <div>
            <h1>Section 3</h1><input type="text" />
        </div>
        <div>
            <h1>Section 4</h1><input type="text" />
        </div>
    </div>
`;

result();

// Setup events
let focusEvent = document.createEvent('UIEvents');
focusEvent.initEvent('focus', true, true);
let blurEvent = document.createEvent('UIEvents');
blurEvent.initEvent('blur', true, true);

// Focus second div
let allDivs = document.querySelectorAll('div div');
let div = allDivs[1];

div.querySelector('input').dispatchEvent(focusEvent);

expect(allDivs[0].className).to.not.contains('focused', "Wrong div was highlighted");
expect(allDivs[1].className).to.contains('focused', "Div was not highlighted");
expect(allDivs[2].className).to.not.contains('focused', "Wrong div was highlighted");
expect(allDivs[3].className).to.not.contains('focused', "Wrong div was highlighted");

// Blur second and focus fourth div
div.querySelector('input').dispatchEvent(blurEvent);
div = allDivs[3];
div.querySelector('input').dispatchEvent(focusEvent);

expect(allDivs[0].className).to.not.contains('focused', "Wrong div was highlighted");
expect(allDivs[1].className).to.not.contains('focused', "Wrong div was highlighted");
expect(allDivs[2].className).to.not.contains('focused', "Wrong div was highlighted");
expect(allDivs[3].className).to.contains('focused', "Div was not highlighted");