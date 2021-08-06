const passwordShowBtn = document.querySelector('.password_show_btn');

if(passwordShowBtn) {
    const fieldPassword = document.querySelector('#login_password');
    passwordShowBtn.addEventListener('mousedown', () => {
        fieldPassword.type = "text";
    });
    passwordShowBtn.addEventListener('touchstart', () => {
        fieldPassword.type = "text";
    });
    passwordShowBtn.addEventListener('touchend', () => {
        fieldPassword.type = "password";
    });
    passwordShowBtn.addEventListener('mouseup', () => {
        fieldPassword.type = "password";
    });
    passwordShowBtn.addEventListener('mouseleave', () => {
        fieldPassword.type = "password";
    });
}

const productContainer = document.querySelector('.main_page_product_list_main');
if(productContainer) {
    productContainer.addEventListener('change', evt => {
        if(evt.target.matches('input')) { checkProduct(evt.target) }
    });

    function checkProduct(input) {
        const checkboxes  = productContainer.querySelectorAll('.product_list_item_checkbox');
        const downloadBtn = document.querySelector('.main_page_product_list_footer_btn');
        
        for(let i = 0; i < checkboxes.length; i++) {
            if(checkboxes[i].checked) {
                downloadBtn.classList.remove('disabled');
                downloadBtn.disabled = false;
                break
            } else {
                !downloadBtn.classList.contains('disabled') && downloadBtn.classList.add('disabled');
                downloadBtn.disabled = true;
            }
        };
    }
}