const checkingURL = "../../src/pages/save_feedback_page.php";
const reqFields = document.getElementsByClassName('required');
const successMsg = document.getElementById('verified-wrapper');

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

function chooseFieldType(error, field, fieldName) {
    let fieldInput;
    field.lastElementChild.textContent = `This field cannot be ${error}`;
    if (fieldName !== 'message') {
        fieldInput = field.getElementsByTagName("input")[0];
    }
    else {
        fieldInput = field.getElementsByTagName("textarea")[0];
    }
    return fieldInput
}

function toggleErrors(reqFields, data) {
    let result, field, fieldName;
    for (field of reqFields) {
        let fieldLabel = field.getElementsByTagName("label")[0];
        fieldName = fieldLabel.getAttribute('for');
        result = data[`${fieldName}_error_msg`] ?? '';
        if (result) {
            let fieldArea = chooseFieldType(result, field, fieldName);
            fieldArea.classList.add('error');
            field.lastElementChild.textContent = `This field cannot be ${result}`;
        }
        else {
            let fieldArea = chooseFieldType(result, field, fieldName);
            fieldArea.classList.remove('error');
            field.lastElementChild.textContent = '';
        }
    }
}

function toggleSuccessMsg(data) {
    let el;
    let successEls = successMsg.getElementsByClassName('verified')
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

async function sendData() {
    let data = collectData();
    let responseData = await getCheck(data);
    toggleErrors(reqFields, responseData);
    toggleSuccessMsg(responseData);
}


