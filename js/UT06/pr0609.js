document.addEventListener('DOMContentLoaded', function () {

    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('open-modal-btn');
    const closeModalBtn = document.querySelector('.close');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    document.getElementById('register-tab').addEventListener("click", openTab('register'));

    // mostrar la ventana modal al hacer clic en el boton de abrir modal
    openModalBtn.addEventListener('click', function () {
        modal.style.display = 'block';
    });

    // cerrar la ventana modal al hacer clic en el boton de cerrar
    closeModalBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    //cambiar entre las pestañas
    function openTab(tabName) {
        const loginTab = document.getElementById('login');
        const registerTab = document.getElementById('register');

        loginTab.style.display = 'none';
        registerTab.style.display = 'none';

        if (tabName === 'login') {
            loginTab.style.display = 'block';
        } else {
            registerTab.style.display = 'block';
        }
    }

    openTab('login');


    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email-login').value;
        const password = document.getElementById('password-login').value;

        console.log('Operación: Login');
        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', password);
    });

    registerForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const email = document.getElementById('email-register').value;
        const password = document.getElementById('password-register').value;
       
        console.log('Operación: Registro');
        console.log('Correo Electrónico:', email);
        console.log('Contraseña:', password);
    });
});
