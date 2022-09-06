import throttle from "lodash.throttle"
const formRef = document.querySelector('form')
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = "feedback-form-state";
let formData = {};

checkLocalStorage()
formRef.addEventListener('input', throttle(getFormValue, 500))
formRef.addEventListener('submit', (e) => {
    e.preventDefault()
      if (message.value === '' || email.value === '') {
        alert(' Please fill all fields');
    } else {
       console.log(formData);
          e.currentTarget.reset();
          localStorage.removeItem(STORAGE_KEY);
          formData = {};
    } 
})

 function getFormValue(e) {
     formData[e.target.name] = e.target.value;
     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
 }

function checkLocalStorage() {
    const getValue = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (getValue) {
        formRef[0].value = getValue.email || '';
        formRef[1].value = getValue.message || '';
        formData = getValue;
    }
}




