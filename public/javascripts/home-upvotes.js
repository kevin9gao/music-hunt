window.addEventListener("DOMContentLoaded", (event) => {
  const upvoteButtons = document.getElementsByClassName("upvote-button")
  const loggedInUser = document.getElementById('current-user').value

  if (loggedInUser) {
    for (let i = 0; i < upvoteButtons.length; i++) {
      const upvoteButton = upvoteButtons[i]
      const songId = upvoteButton.id
      let hasBeenClicked = upvoteButton.dataset.click
      const upvoteNumber = document.getElementById(`N${songId}`)
      const icon = document.getElementById(`I${songId}`)

      if (hasBeenClicked === "true") {
        upvoteButton.style.border = "#004bff 2px solid"
        icon.style.borderBottom = "11px solid #004bff"
        icon.style.left = "9px"
      }

      upvoteButton.onclick = async event => {
        try {
          const res = await fetch(`/songs/upvote/${songId}`, {
            method: "POST",
          })
          console.log(res)
        } catch (e) {
          console.error(e)
        }

        if (hasBeenClicked === "false") {
          hasBeenClicked = "true"
          upvoteNumber.innerHTML = Number(upvoteNumber.innerHTML) + 1;
          upvoteButton.style.border = "#004bff 2px solid"
          icon.style.borderBottom = "11px solid #004bff"
          icon.style.left = "9px"
        } else if (hasBeenClicked === "true") {
          hasBeenClicked = "false"
          upvoteNumber.innerHTML = Number(upvoteNumber.innerHTML) - 1;
          upvoteButton.style.border = "1px solid #8c8f94"
          icon.style.borderBottom = "11px solid #8c8f94"
          icon.style.left = "10px"
        }
      }
    }
  }
})
