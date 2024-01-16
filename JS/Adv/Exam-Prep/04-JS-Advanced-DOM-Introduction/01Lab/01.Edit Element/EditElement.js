function editElement(ref, string, replacer) {
    let element = ref;
    
    while (element.textContent.includes(string)) {
        element.textContent = element.textContent.replace(string, replacer);
    }
}