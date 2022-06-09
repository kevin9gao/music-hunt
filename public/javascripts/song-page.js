const modal = document.getElementById('myModal');
const myButton = document.getElementById('myButton');
const span = document.getElementById('close');

myButton.onclick = function() {
    modal.style.display = 'block';
}

window.onclick = function(event) {
    if (event.target = modal) {
        modal.style.display = 'none';
    }
}

span.onclick = function() {
    modal.style.display = 'none';
}
