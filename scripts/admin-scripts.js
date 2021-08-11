// Выглядит сложно но для теперь, чтобы показать/скрыть пароль
// достаточно соблюсти простую конструкцию в html:
// <div>
//     <input type="password" input_password" id="password" placeholder="Password">
//     <button type="button" class="password_show_btn"> { ТУТ ЛОГОТИП ИЛИ ТЕКСТ } </button>
// </div>
// Для использования просто подключается этот файл к странице
function showPassword() {
    document.addEventListener('mousedown', evt => {
        if(evt.target.classList.contains('password_show_btn')) {
            const fieldPassword = evt.target.parentElement.querySelector('.input_password');
            fieldPassword.type = "text";

            evt.target.addEventListener('mouseleave', () => {
                    fieldPassword.type = "password";
            });
            evt.target.addEventListener('mouseup', () => {
                fieldPassword.type = "password";
            });
        }
    });

    document.addEventListener('touchstart', evt => {
        if(evt.target.classList.contains('password_show_btn')) {
            const fieldPassword = evt.target.parentElement.querySelector('.input_password');
            fieldPassword.type = "text";

            evt.target.addEventListener('touchend', () => {
                fieldPassword.type = "password";
            });
        }
    });
};
document.addEventListener('DOMContentLoaded', showPassword);

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
};

// Редактирование информации в аккаунте
// БЕЗ ОТПРАВКИ ДАННЫХ НА СЕРВЕР
const accuntInfoContainer = document.querySelector('.main_admin_settings_container');
if(accuntInfoContainer) {
    accuntInfoContainer.addEventListener('click', evt => {
        const btn = evt.target.classList.contains('main_admin_settings_item_info_button') ? evt.target : false;
        
        if(btn) {
            const containerInfo = btn.parentElement;
            const mainContainer = containerInfo.parentElement;

            if(containerInfo.classList.contains('name')) {
                editName(containerInfo, mainContainer);
            } else if (containerInfo.classList.contains('email')) {
                editEmail(containerInfo, mainContainer);
            } else if (containerInfo.classList.contains('password')) {
                editPassword(containerInfo, mainContainer);
            }
        }
    });

    // Изменение имени
    function editName(container, mainContainer) {
        const childrenItems = container.cloneNode(true);

        const firstInput = document.createElement('input');
        const secondInput = document.createElement('input')
        const saveBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');

        saveBtn.setAttribute('type', 'button');
        saveBtn.innerText = "save";
        saveBtn.classList.add('main_admin_settings_item_info_content_sn_save');
        
        cancelBtn.setAttribute('type', 'button');
        cancelBtn.innerText = "cancel";
        cancelBtn.classList.add('main_admin_settings_item_info_content_sn_cancel');

        firstInput.classList.add('main_admin_settings_item_info_content_fn');
        firstInput.setAttribute('placeholder', 'First Name');
        firstInput.setAttribute('type', 'text');
        
        secondInput.classList.add('main_admin_settings_item_info_content_sn');
        secondInput.setAttribute('placeholder', 'Second Name');
        secondInput.setAttribute('type', 'text');

        container.innerHTML = "";
        container.append(firstInput, secondInput, saveBtn, cancelBtn);

        // Сохраняем. Закрываем
        saveBtn.addEventListener('click', () => {
            childrenItems.querySelector('#fn').innerText = firstInput.value;
            childrenItems.querySelector('#sn').innerText = secondInput.value;
            container.remove();
            mainContainer.append(childrenItems);
        });

        // Отменяем. Закрываем
        cancelBtn.addEventListener('click', () => {
            container.remove();
            mainContainer.append(childrenItems);
        });
    };

    // Изменение email. 
    // Проверки валидности email нет
    // Проверки пароля нет
    function editEmail(container, mainContainer) {
        const childrenItems = container.cloneNode(true);

        const firstInput = document.createElement('input');
        const secondInput = document.createElement('input')
        const saveBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        const containerPassword = document.createElement('div');
        const showPasswordBtn = document.createElement('button');

        showPasswordBtn.setAttribute('type', 'button');
        showPasswordBtn.classList.add('password_show_btn');

        containerPassword.classList.add('main_login_container_input_password_container');

        firstInput.setAttribute('type', 'email');
        firstInput.setAttribute('placeholder', 'New Email');

        secondInput.setAttribute('placeholder', 'Account Password');
        secondInput.setAttribute('type', 'password');
        secondInput.classList.add('input_password');

        saveBtn.setAttribute('type', 'button');
        saveBtn.innerText = "+ add";
        saveBtn.classList.add('main_admin_settings_item_info_content_sn_save');
        
        cancelBtn.setAttribute('type', 'button');
        cancelBtn.innerText = "cancel";
        cancelBtn.classList.add('main_admin_settings_item_info_content_sn_cancel');

        container.innerHTML = "";

        containerPassword.append(secondInput, showPasswordBtn);
        container.append(firstInput, containerPassword, saveBtn, cancelBtn);

        // Сохраняем. Закрываем
        saveBtn.addEventListener('click', () => {
            childrenItems.querySelector('#email').innerText = firstInput.value;
            document.querySelector('.header-line_user_login').innerText = firstInput.value;
            container.remove();
            mainContainer.append(childrenItems);
        });

        // Отменяем. Закрываем
        cancelBtn.addEventListener('click', () => {
            container.remove();
            mainContainer.append(childrenItems);
        });
    }

    // Изменение пароля
    // Только фронт-енд часть
    function editPassword(container, mainContainer) {
        const childrenItems = container.cloneNode(true);

        const firstInput = document.createElement('input');
        const secondInput = document.createElement('input')
        const saveBtn = document.createElement('button');
        const cancelBtn = document.createElement('button');
        const containerPasswordF = document.createElement('div');
        const containerPasswordS = document.createElement('div');
        const showPasswordBtn = document.createElement('button');

        firstInput.setAttribute('type', 'password');
        firstInput.setAttribute('placeholder', 'Current Password');
        firstInput.classList.add('input_password');;

        secondInput.setAttribute('type', 'password');
        secondInput.setAttribute('placeholder', 'New Password');
        secondInput.classList.add('input_password');

        showPasswordBtn.setAttribute('type', 'button');
        showPasswordBtn.classList.add('password_show_btn');

        containerPasswordF.classList.add('main_login_container_input_password_container');
        containerPasswordS.classList.add('main_login_container_input_password_container');

        saveBtn.setAttribute('type', 'button');
        saveBtn.setAttribute('disabled', '');
        saveBtn.innerText = "Confirm";
        saveBtn.classList.add('main_admin_settings_item_info_content_sn_save');
        
        cancelBtn.setAttribute('type', 'button');
        cancelBtn.innerText = "cancel";
        cancelBtn.classList.add('main_admin_settings_item_info_content_sn_cancel');

        container.innerHTML = "";

        containerPasswordF.append(firstInput, showPasswordBtn);
        containerPasswordS.append(secondInput, showPasswordBtn.cloneNode(true));

        container.append(containerPasswordF, containerPasswordS, saveBtn, cancelBtn);

        // Проверяем совпадение паролей. Функция ниже
        container.addEventListener('input', evt => {
            if(evt.target.matches('input')) {
                comparePasswords(firstInput.value, secondInput.value);
            };
        });

        // Сохраняем. Закрываем
        saveBtn.addEventListener('click', () => {
            container.remove();
            mainContainer.append(childrenItems);
        });

        // Отменяем. Закрываем
        cancelBtn.addEventListener('click', () => {
            container.remove();
            mainContainer.append(childrenItems);
        });

        // Тут соответственно можно добавить запрос с проверкой на соответствие настоящему паролю
        function comparePasswords(firstPass, secondPass) {
            if(firstPass.length > "" && secondPass.length >= 7) {
                saveBtn.removeAttribute('disabled');
            }
        }
    }
};

const faqQuestion = document.querySelector('.main_admin_questions_container');
if(faqQuestion) {
  faqQuestion.addEventListener('click', evt => {
    const item = evt.target.matches('h5') ? evt.target : (evt.target.matches('span') ? evt.target.parentElement : '');
    openQuestion(item);
  });
  function openQuestion(item) {
    const questionContainer = item.parentElement;
    const answer = questionContainer.querySelector('.main_admin_questions_answer');
    const answerHeight = answer.clientHeight;
    const questionContainerHeight = questionContainer.clientHeight;
    if(questionContainerHeight > 99) {
      questionContainer.style.height = 99 + 'px';
      item.classList.remove('active');
    } else {
      item.classList.add('active');
      questionContainer.style.height = questionContainerHeight + answerHeight + 40 + 'px';
    }
  };
};

