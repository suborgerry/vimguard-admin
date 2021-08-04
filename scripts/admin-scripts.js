const passwordShowBtn = document.querySelector('.password_show_btn');

if(passwordShowBtn) {
    const fieldPassword = document.querySelector('#login_password');
    passwordShowBtn.addEventListener('mousedown', () => {
        fieldPassword.type = "text";
    });
    passwordShowBtn.addEventListener('mouseup', () => {
        fieldPassword.type = "password";
    });
    passwordShowBtn.addEventListener('mouseleave', () => {
        fieldPassword.type = "password";
    });
}