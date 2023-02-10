function solve() {
  let input = document.getElementById('text').value.toLowerCase();
  let convention = document.getElementById('naming-convention').value;
  let result = document.querySelector('.result-container #result');
  let string = '';

  if (convention === 'Camel Case') {
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') {
        i++;
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }

    result.textContent = string;

  } else if (convention === 'Pascal Case') {
    for (let i = 0; i < input.length; i++) {
      if (i === 0) {
        string += input[i].toUpperCase();
        i++;
      }

      if (input[i] === ' ') {
        i++;
        string += input[i].toUpperCase();
      } else {
        string += input[i];
      }
    }

    result.textContent = string;

  } else {
    result.textContent = 'Error!'
  }
}

// "this is an example", "Camel Case"
// "secOND eXamPLE", "Pascal Case"
// "Invalid Input", "Another Case"