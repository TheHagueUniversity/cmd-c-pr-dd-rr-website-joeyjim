var modal = document.getElementById('inloggen');

function openModal() {
   document.getElementById('inloggen').style.display='block';
}


// als je buiten de modal panel klikt, sluit het.
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}