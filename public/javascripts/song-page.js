window.addEventListener("DOMContentLoaded", (event) => {

    // grab the comment section box and submit comment button
    const commentBox = document.getElementById('comment-box')
    const commentButton = document.getElementById('submit-comment-button');

    // event listener for submit comment button
    commentButton.addEventListener('click', async (submitCommentEvent) => {
        // prevent default action for clicking on a form submit (reload page)
        submitCommentEvent.preventDefault();

        // grab the currently logged in user, songId, message through hidden fields in HTML
        const loggedInUser = document.getElementById('current-user').value;
        const loggedInUserJSON = JSON.parse(loggedInUser);
        const userId = loggedInUserJSON.id;
        const username = loggedInUserJSON.username;
        const profilePic = loggedInUserJSON.profilePic;
        const full_name = loggedInUserJSON.full_name;
        const songId = document.getElementById('song-id').value;
        const body = document.getElementById('comment-message').value;
        const commentTextarea = document.getElementById('comment-message');

        if (body !== '') {

            // create a new comment wrapper div and append to comment box
            const newCommentWrapper = document.createElement('div');
            newCommentWrapper.setAttribute('class', 'comment-wrapper');
            commentBox.appendChild(newCommentWrapper);

            // make POST request through a fetch call
            const res = await fetch(`/songs/comments/new`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId,
                    songId,
                    body,
                    username,
                    profilePic,
                    full_name
                })
            })

            // turn comment data into a JSON
            const commentData = await res.json();
            console.log('COMMENTDATA: ', commentData);

            if (commentData) {
                // create new anchor el and img el and append
                const newAnchor = document.createElement('a');
                newAnchor.setAttribute('href', `/users/${commentData.username}`);
                const newProfPic = document.createElement('img');
                newProfPic.setAttribute('src', profilePic);
                newProfPic.setAttribute('class', 'comment-profile-pics');
                newAnchor.appendChild(newProfPic);
                newCommentWrapper.appendChild(newAnchor);

                // create new comment-bodies div and p and append
                const newCommentBodyDiv = document.createElement('div');
                newCommentBodyDiv.setAttribute('class', 'comment-bodies');
                const newCommentBodyText = document.createElement('p');
                newCommentBodyText.setAttribute('class', 'comment-body-text');
                newCommentBodyText.innerHTML = `${commentData.full_name}: ${commentData.comment.body}`;
                newCommentBodyDiv.appendChild(newCommentBodyText);
                newCommentWrapper.appendChild(newCommentBodyDiv);

                commentTextarea.value = '';
                commentTextarea.focus();
            }
        }
    });
});
