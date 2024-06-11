const scriptURL = 'https://script.google.com/macros/s/AKfycbxKi0zRBiRqYFk77_9Alnu9EpsdDSfQueShaWSg-L7juRTL4q4i_iiGdpQXCm7AlKOpgg/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => alert("Thank you! your form is submitted successfully."))
        .then(() => { window.location.reload(); })
        .catch(error => console.error('Error!', error.message))
})