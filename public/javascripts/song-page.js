window.addEventListener("DOMContentLoaded", (event) => {

    // grab the comment section box and submit comment button
    const commentBox = document.getElementById('comment-box')
    const commentButton = document.getElementById('submit-comment-button');

    // event listener for submit comment button
    if (commentButton) {
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
                    newProfPic.setAttribute('src', commentData.profilePic);
                    newProfPic.setAttribute('class', 'comment-profile-pics');
                    newAnchor.appendChild(newProfPic);
                    newCommentWrapper.appendChild(newAnchor);

                    // create new comment-bodies div and p and append
                    const newCommentBodyDiv = document.createElement('div');
                    newCommentBodyDiv.setAttribute('class', 'comment-bodies');
                    const newCommentBodyText = document.createElement('p');
                    newCommentBodyText.setAttribute('class', `comment-body-text`);
                    newCommentBodyText.setAttribute('id', `${commentData.comment.id}-comment-body-text`);
                    newCommentBodyText.innerHTML = `${commentData.full_name}: ${commentData.comment.body}`;
                    newCommentBodyDiv.appendChild(newCommentBodyText);
                    newCommentWrapper.appendChild(newCommentBodyDiv);

                    // create edit and delete buttons and form
                    const editDeleteDiv = document.createElement('div');
                    const editButton = document.createElement('button');
                    const deleteButton = document.createElement('button');
                    const editForm = document.createElement('form');
                    const editLabel = document.createElement('label');
                    const editText = document.createElement('textarea');
                    const editSubmit = document.createElement('button');

                    editDeleteDiv.setAttribute('class', 'edit-and-delete');
                    editButton.setAttribute('class', 'edit-button');
                    editButton.setAttribute('id', `edit-comment-${commentData.comment.id}`);
                    editButton.innerText = 'Edit';
                    deleteButton.setAttribute('class', 'delete-button');
                    deleteButton.setAttribute('id', `delete--comment-${commentData.comment.id}`);
                    deleteButton.innerText = 'Delete';
                    editForm.setAttribute('class', 'hidden');
                    editForm.setAttribute('id', `edit-form-${commentData.comment.id}`);
                    editLabel.innerText = 'Edit Comment:';
                    editText.setAttribute('name', 'body');
                    editText.setAttribute('id', `${commentData.comment.id}-edit-comment`);
                    editText.setAttribute('value', `${commentData.comment.body}`);
                    editText.setAttribute('value', `${commentData.comment.body}`);
                    editText.required = true;
                    editSubmit.setAttribute('class', 'edit-submit');
                    editSubmit.setAttribute('id', `edit-submit-${commentData.comment.id}`);
                    editSubmit.innerText = 'Submit Edit';

                    editForm.appendChild(editLabel)
                    editForm.appendChild(editText)
                    editForm.appendChild(editSubmit)
                    editDeleteDiv.appendChild(editButton);
                    editDeleteDiv.appendChild(deleteButton);
                    editDeleteDiv.appendChild(editForm);
                    commentBox.appendChild(editDeleteDiv);

                    commentTextarea.value = '';
                    commentTextarea.focus();
                }
            }
        });
    }
});
