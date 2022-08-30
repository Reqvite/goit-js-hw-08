import throttle from "lodash.throttle"
const formRef = document.querySelector('form')
const STORAGE_KEY = "feedback-form-state"
let formData = {}

formRef.addEventListener('input', throttle(getFormValue, 500))

 function getFormValue(e) {
     formData[e.target.name] = e.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
 }

formRef.addEventListener('submit', (e) => {
    e.preventDefault()
    if (!(formData.email && formData.message)) {
       alert('All fields must be filled')
    } else {
       e.currentTarget.reset()
       localStorage.removeItem(STORAGE_KEY)
        console.log(formData);
        formData = {}
    } 
})

checkLocalStorage()
function checkLocalStorage() {
    const getValue = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (getValue) {
        formRef[0].value = getValue.email
        formRef[1].value = getValue.message
        formData = getValue
    } 
}




