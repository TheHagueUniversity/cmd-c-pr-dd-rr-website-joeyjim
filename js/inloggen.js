var modal = document.getElementById('inloggen');


// als je buiten de modal panel klikt, sluit het.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}