const checkingURL = "../../src/pages/save_feedback_page.php";

async function getCheck(data) {
    const response = await fetch(checkingURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })

    return await response.json();
}

function collectData() {
    return {
        "name": document.getElementById("name").value,
        "email": document.getElementById("email").value,
        "gender": document.querySelector('input[name="gender"]:checked').value,
        "country": document.getElementById("country").value,
        "message": document.getElementById("message").value,
    };
}

function chooseFieldObject(error, field, fieldFor) {
    let fieldInput;
    field.lastElementChild.textContent = `This field cannot be ${error}`;
    if (fieldFor !== 'message') {
        fieldInput = field.getElementsByTagName("input")[0];
    }
    else {
        fieldInput = field.getElementsByTagName("textarea")[0];
    }

    return fieldInput
}

function toggleErrors(reqFields, data) {
    let errorValue, field, fieldFor;
    for (field of reqFields) {
        let fieldLabel = field.getElementsByTagName("label")[0];
        fieldFor = fieldLabel.getAttribute('for');
        errorValue = data[`${fieldFor}_error_msg`] ?? '';
        if (errorValue) {
            let fieldArea = chooseFieldObject(errorValue, field, fieldFor);
            fieldArea.classList.add('error');
            field.lastElementChild.textContent = `This field cannot be ${errorValue}`;
        }
        else {
            let fieldArea = chooseFieldObject(errorValue, field, fieldFor);
            fieldArea.classList.remove('error');
            field.lastElementChild.textContent = '';
        }
    }
}

function toggleSuccessMsg(data) {
    let el;
    const successMsg = document.getElementById('verified-wrapper');
    let successEls = successMsg.getElementsByClassName('verified');
    if (data['valid'] === false) {
        for (el of successEls) {
            el.style.display = 'none';
        }
    } else {
        for (el of successEls) {
            el.style.display = 'block';
        }
    }
}

async function sendData(event) {
    event.preventDefault();
    let data = collectData();
    let responseData = await getCheck(data);
    const reqFields = document.getElementsByClassName('required');
    toggleErrors(reqFields, responseData);
    toggleSuccessMsg(responseData);
}

function save_feedback() {
    const form = document.getElementById('simple_form');
    form.addEventListener('submit', sendData);
}

window.addEventListener('load', save_feedback);