window.addEventListener("load", event => {
  const optionsPopUp = document.getElementById("options-pop-up-background")
  const options = document.getElementById("options-button")
  const upvoteButton = document.getElementsByClassName("upvote-button")
  const songId = upvoteButton[0].id
  const name = songName.value

  if (options) {
    options.onclick = event => {
      optionsPopUp.style.display = "block"
    }

    const closeOptions = document.getElementById("close-options")
    closeOptions.onclick = event => {
      optionsPopUp.style.display = "none"
    }

    const deleteButton = document.getElementById("delete-option")
    const deletePopUp = document.getElementById("delete-pop-up-background")

    deleteButton.onclick = event => {
      deletePopUp.style.display = "block"
    }

    const cancel = document.getElementById("cancel-delete")
    cancel.onclick = event => {
      deletePopUp.style.display = "none"
    }
  }
})
