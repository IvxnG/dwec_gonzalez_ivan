const checkFechaBtn = document.getElementById('checkFecha');
const checkTelefonoBtn = document.getElementById('checkTelefono');
const checkEmailBtn = document.getElementById('checkEmail');
const checkColorBtn = document.getElementById('checkColor');
const checkIpBtn = document.getElementById('checkIp');
const checkUrlBtn = document.getElementById('checkUrl');
const checkPasswordBtn = document.getElementById('checkPassword');
const checkNifBtn = document.getElementById('checkNif');
const checkMatriculaBtn = document.getElementById('checkMatricula');

checkFechaBtn.addEventListener('click', function () { checkValidity('fecha'); });
checkTelefonoBtn.addEventListener('click', function () { checkValidity('telefono'); });
checkEmailBtn.addEventListener('click', function () { checkValidity('email'); });
checkColorBtn.addEventListener('click', function () { checkValidity('color'); });
checkIpBtn.addEventListener('click', function () { checkValidity('ip'); });
checkUrlBtn.addEventListener('click', function () { checkValidity('url'); });
checkPasswordBtn.addEventListener('click', function () { checkValidity('password'); });
checkNifBtn.addEventListener('click', function () { checkValidity('nif'); });
checkMatriculaBtn.addEventListener('click', function () { checkValidity('matricula'); });

function checkValidity(fieldId) {
    const fieldValue = document.getElementById(fieldId).value;
    const pattern = document.getElementById(fieldId).getAttribute('pattern');
    const regex = new RegExp(pattern);

    if (regex.test(fieldValue)) {
        alert('El valor es válido según la expresión regular.');
    } else {
        alert('El valor NO es válido según la expresión regular.');
    }
}