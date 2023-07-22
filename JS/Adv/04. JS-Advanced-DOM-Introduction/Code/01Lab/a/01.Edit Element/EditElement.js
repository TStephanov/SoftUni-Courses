function editElement(reference, text, replacer) {
    let string = reference.textContent;
    
    string = string.split(text).join(replacer);
    
    reference.textContent = string;
}