const form = document.querySelector('form')
const formData = {}

form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value
    localStorage.setItem("feedback-form-state", JSON.stringify(formData))

})

checkLocalStorage()

form.addEventListener('submit', (e) => {
    e.preventDefault()
    e.currentTarget.reset()
    localStorage.removeItem('feedback-form-state')
    console.log(formData);
})

function checkLocalStorage() {
    const getValue = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (!getValue) {
        return
    }
    if (getValue.email) {
        form[0].value = getValue.email

    }
    if (getValue.message) {
        form[1].value = getValue.message
    }
}


