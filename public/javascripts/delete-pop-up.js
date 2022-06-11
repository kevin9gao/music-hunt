window.addEventListener("load", event => {
  const button = document.getElementById("delete-button")
  const popUp = document.getElementById("delete-pop-up-background")
  button.onclick = event => {
    popUp.style.display = "block"
  }

  const cancel = document.getElementById("cancel-delete")
  cancel.onclick = event => {
    popUp.style.display = "none"
  }
})
