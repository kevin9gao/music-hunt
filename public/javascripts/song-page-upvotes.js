window.addEventListener("DOMContentLoaded", (event) => {
  const upvoteButtons = document.getElementsByClassName("upvote-button")
  const upvoteButton = upvoteButtons[0]
  const loggedInUser = document.getElementById('current-user').value

  if (loggedInUser) {
    const songId = upvoteButton.id
    let hasBeenClicked = upvoteButton.dataset.click
    const upvoteNumber = document.getElementById(`N${songId}`)
    const upvoteWord = document.getElementById("upvote-word")
    const icon = document.getElementById(`I${songId}`)
    if (hasBeenClicked === "true") {
      upvoteButton.style.backgroundColor = "#fff"
      upvoteButton.style.border = "2px solid #004bff"
      upvoteNumber.style.color = "#004bff"
      upvoteWord.style.color = "#004bff"
      upvoteWord.innerHTML = "UPVOTED"
      icon.style.borderBottom = "18px solid #004bff"
    }

    upvoteButton.onclick = async event => {
      try {
        const res = await fetch(`/songs/upvote/${songId}`, {
          method: "POST",
        })
      } catch (e) {
        console.error(e)
      }

      if (hasBeenClicked === "false") {
        hasBeenClicked = "true"
        upvoteNumber.innerHTML = Number(upvoteNumber.innerHTML) + 1;
        upvoteButton.style.backgroundColor = "#fff"
        upvoteButton.style.border = "2px solid #004bff"
        upvoteNumber.style.color = "#004bff"
        upvoteWord.style.color = "#004bff"
        upvoteWord.innerHTML = "UPVOTED"
        icon.style.borderBottom = "18px solid #004bff"
        // icon.style.left = "9px"
      } else if (hasBeenClicked === "true") {
        hasBeenClicked = "false"
        upvoteNumber.innerHTML = Number(upvoteNumber.innerHTML) - 1;
        upvoteButton.style.backgroundColor = "#004bff"
        upvoteNumber.style.color = "#fff"
        icon.style.borderBottom = "18px solid #fff"
        upvoteWord.style.color = "#fff"
        upvoteWord.innerHTML = "UPVOTE"
      }
    }
  }
})
