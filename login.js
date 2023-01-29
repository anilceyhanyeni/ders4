const butonLogin = document.querySelector("#butonLogin")
butonLogin.addEventListener('click', function() {
    document.querySelector('#id01').style.display='block'
})

const butonKapat = document.querySelector("#butonKapat")
butonKapat.addEventListener('click', function() {
    document.querySelector('#id01').style.display='none'
})

// Get the modal
let modal = document.querySelector('#id01');

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(olay) {
    if (olay.target == modal) {
        modal.style.display = "none";
    }
})