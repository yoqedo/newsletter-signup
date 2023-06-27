const form = document.querySelector('form')
const input = document.querySelector('.femail')
const wrapper = document.querySelector('.signup-form')
const successMessage = document.querySelector('.success-message')
const errorMessage = document.querySelector('.error-message')
const dissmissMessage = document.querySelector('.dismiss-message-btn')

window.addEventListener('DOMContentLoaded', function () {
    console.log('loading')
})

// Form Field
form.onsubmit = () => {
    const result = input.value

    if (result.includes('@')) {
        console.log('yes')
        wrapper.style.display = 'none'
        successMessage.classList.add('success-message-active')
        input.value = ''
    } else {
        console.log('no')
        input.style.border = 'solid #FF5374 1px'
        input.style.background = '#fcc2cd';
        errorMessage.classList.add('error-message-active')
        input.value = ''
    }

    return false;
}

dissmissMessage.onclick = () => {
    console.log('dissmiss');
    successMessage.classList.remove('success-message-active')
    wrapper.style.display = 'flex'
}

// Attribution
document.querySelector('.attribution-circle').addEventListener('mouseenter', function () {
    document.querySelector('.attribution-content').classList.add('attribution-content-active')
    console.log('hovering')
})

document.querySelector('.attribution-content').addEventListener('mouseleave', function () {
    document.querySelector('.attribution-content').classList.remove('attribution-content-active')
    console.log('hovering')
})