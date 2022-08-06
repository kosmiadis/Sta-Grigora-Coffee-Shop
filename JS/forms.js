const submitBtn = document.querySelector('.submit')
const inputs = document.querySelectorAll('input')
const textareas = document.querySelectorAll('textarea')
submitBtn.addEventListener('click', e => {
    inputs.forEach(input => input.value = '')
    textareas.forEach(textarea => textarea.value = '')
})