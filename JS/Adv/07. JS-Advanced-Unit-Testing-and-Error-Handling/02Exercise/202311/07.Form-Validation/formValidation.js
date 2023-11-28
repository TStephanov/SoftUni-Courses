function validate() {
    let usernameValid = false;
    let passValid = false;
    let confirmPassValid = false;
    let emailValid = false;
    let companyInfoNumberValid = false;
    let passesMatch = false;
    const submitBtnElement = document.getElementById('submit');
    const checkBoxElement = document.getElementById('company');

    const usernamePattern = /^[A-Za-z0-9]{3,20}$/g;
    const passwordPattern = /^\w{5,15}$/g;
    const emailPattern = /[A-Za-z0-9]+\@[A-Za-z0-9]+\.[A-Za-z0-9]+/g;
    const companyNumberPattern = /^\d{4}$/g;

    // add event listener to the Submit button
    submitBtnElement.addEventListener('click', submitCheck);

    // IsCompany checkbox check
    checkBoxElement.addEventListener('change', () => {
        if (checkBoxElement.checked) {
            document.getElementById('companyInfo').style.display = 'block';
        } else {
            document.getElementById('companyInfo').style.display = 'none';
        }
    });

    function submitCheck(ev) {
        // check each field to have valid input
        let usernameElement = document.getElementById('username');
        if (usernamePattern.test(usernameElement.value) === false) {
            usernameElement.style = 'border-color: red';
            usernameValid = false;
        } else {
            usernameElement.style.border = 'none';
            usernameValid = true;
        }

        let emailElement = document.getElementById('email');
        if (!emailPattern.test(emailElement.value)) {
            emailElement.style = 'border-color: red';
            emailValid = false;
        } else {
            emailElement.style.border = 'none';
            emailValid = true;
        }

        let checkPass = function (string) {
            if (passwordPattern.test(string)) {
                return true;
            } else {
                return false;
            }
        }
        let passElement = document.getElementById('password');
        let confirmPassElement = document.getElementById('confirm-password');
        if (!checkPass(passElement.value)) {
            passElement.style = 'border-color: red';
            passValid = false;
        } else {
            passElement.style.border = 'none';
            passValid = true;
        }
        if (!checkPass(confirmPassElement.value)) {
            confirmPassElement.style = 'border-color: red';
            confirmPassValid = false;
        } else {
            confirmPassElement.style.border = 'none';
            confirmPassValid = true;
        }

        if (passElement.value !== confirmPassElement.value) {
            passElement.style = 'border-color: red';
            confirmPassElement.style = 'border-color: red';
        } else {
            passesMatch = true;
        }

        if (checkBoxElement.checked) {
            // companyNumber checked, check if it's valid
            let companyInfoNumberElement = document.getElementById('companyNumber');
            if (
                companyNumberPattern.test(companyInfoNumberElement.value)
                && Number(companyInfoNumberElement.value) >= 1000
                && Number(companyInfoNumberElement.value) <= 9999
            ) {
                companyInfoNumberElement.style.border = 'none';
                companyInfoNumberValid = true;
            } else {
                companyInfoNumberElement.style = 'border-color: red';
                companyInfoNumberValid = false;
            }
        }
        // console.log(`usernameValid: ${usernameValid}`);
        // console.log(`emailValid: ${emailValid}`);
        // console.log(`passValid: ${passValid}`);
        // console.log(`confirmPassValid: ${confirmPassValid}`);
        // console.log(`passElement.value === confirmPassElement.value: ${passElement.value === confirmPassElement.value}`);
        // console.log(`checkBoxElement.checked: ${checkBoxElement.checked}`);
        // console.log(`companyInfoNumberValid: ${companyInfoNumberValid}`);

        if (checkBoxElement.checked) {
            if (companyInfoNumberValid) {
                if (
                    usernameValid
                    && emailValid
                    && passValid
                    && confirmPassValid
                    && passesMatch
                ) {
                    document.getElementById('valid').style.display = 'block';
                }
            } else {
                document.getElementById('valid').style.display = 'none';
            }
        } else if (
            usernameValid
            && emailValid
            && passValid
            && confirmPassValid
            && passesMatch
        ) {
            document.getElementById('valid').style.display = 'block';
        } else {
            document.getElementById('valid').style.display = 'none';
        }

        ev.preventDefault();
    }
}