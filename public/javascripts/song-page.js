// grab the comment section box and submit comment button
const commentBox = document.getElementById('comment-box');
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
            // console.log('COMMENTDATA: ', commentData);

            if (commentData) {
                // create new anchor el and img el and append
                const newAnchor = document.createElement('a');
                newAnchor.setAttribute('href', `/users/${commentData.username}`);
                const newProfPic = document.createElement('img');
                newProfPic.setAttribute('src', profilePic);
                newProfPic.setAttribute('class', 'comment-profile-pics');
                newAnchor.appendChild(newProfPic);
                newCommentWrapper.appendChild(newAnchor);
                newCommentWrapper.setAttribute('id', `comment-wrapper-${commentData.comment.id}`);

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
                const editDelContainer = document.createElement('div');
                const editButton = document.createElement('button');
                const deleteButton = document.createElement('button');
                const editForm = document.createElement('form');
                const editLabel = document.createElement('label');
                const editText = document.createElement('textarea');
                const editSubmit = document.createElement('button');

                editDeleteDiv.setAttribute('class', 'edit-and-delete');
                editDeleteDiv.setAttribute('id', `edit-and-delete-${commentData.comment.id}`);
                editDelContainer.setAttribute('class', 'edit-del-container')
                editButton.setAttribute('class', 'edit-button');
                editButton.setAttribute('id', `edit-comment-${commentData.comment.id}`);
                // include event listener to newly created comments
                editButton.addEventListener('click', editEventListener);
                editButton.innerText = 'Edit';
                deleteButton.setAttribute('class', 'delete-button');
                deleteButton.setAttribute('id', `delete-comment-${commentData.comment.id}`);
                deleteButton.addEventListener('click', deleteEventListener);
                deleteButton.innerText = 'Delete';
                editForm.setAttribute('class', 'hidden');
                editForm.setAttribute('id', `edit-form-${commentData.comment.id}`);
                editLabel.innerText = 'Edit Comment:';
                editText.setAttribute('name', 'body');
                editText.setAttribute('id', `${commentData.comment.id}-edit-comment`);
                editText.setAttribute('value', `${commentData.comment.body}`);
                editSubmit.setAttribute('class', 'edit-submit');
                editSubmit.setAttribute('id', `edit-submit-${commentData.comment.id}`);
                editSubmit.innerText = 'Submit Edit';

                editForm.appendChild(editLabel);
                editForm.appendChild(editText);
                editForm.appendChild(editSubmit);
                editDelContainer.appendChild(editButton)
                editDelContainer.appendChild(deleteButton)
                editDeleteDiv.appendChild(editDelContainer);
                editDeleteDiv.appendChild(editForm);
                commentBox.appendChild(editDeleteDiv);

                commentTextarea.value = '';
                commentTextarea.focus();
            }
        }
    });
}

// Edit Button Functionality
const editButtons = document.querySelectorAll('.edit-button');

// incorporate edit event listener to all comments loaded initially.
for (let i = 0; i < editButtons.length; i++) {
    const edit = editButtons[i];
    edit.addEventListener('click', editEventListener);
}

// event listener function to add to each new instance of a comment without reloading
function editEventListener(e) {
    const commentId = e.target.id.split('-')[2];
    const form = document.getElementById(`edit-form-${commentId}`);

    const loggedInUser = document.getElementById('current-user').value;
    const loggedInUserJSON = JSON.parse(loggedInUser);
    const full_name = loggedInUserJSON.full_name;

    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
        form.classList.add('form-design');
    } else {
        form.classList.remove('form-design');
        form.classList.add('hidden');
    }

    const submitEditButton = document.getElementById(`edit-submit-${commentId}`);
    submitEditButton.addEventListener('click', async (submitEditEvent) => {
        submitEditEvent.preventDefault();

        const body = document.getElementById(`${commentId}-edit-comment`).value;

        const res = await fetch(`/songs/comments/${commentId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                body
            })
        });

        const commentDataEdit = await res.json();
        // console.log('COMMENTDATAEDIT', commentDataEdit)

        if (commentDataEdit.message === 'Edit') {
            const bodyElement = document.getElementById(`${commentDataEdit.comment.id}-comment-body-text`);
            const bodyTextArea = document.getElementById(`${commentDataEdit.comment.id}-edit-comment`);

            bodyElement.innerHTML = `${full_name}: ${commentDataEdit.comment.body}`;
            form.classList.add('hidden');
            form.classList.remove('form-design')
            bodyTextArea.value = '';
        }
    })
}

// Delete Button Functionality
const deleteButtons = document.querySelectorAll('.delete-button');

// incorporate delete event listener to all delete buttons loaded initially
for (let i = 0; i < deleteButtons.length; i++) {
    const del = deleteButtons[i];
    del.addEventListener('click', deleteEventListener);
}

async function deleteEventListener(e) {
    e.preventDefault();
    const commentId = e.target.id.split('-')[2];
    const deleteButton = document.getElementById(`delete-comment-${commentId}`);

    const res = await fetch(`/songs/comments/${commentId}`, {
        method: 'DELETE'
    })

    const commentDeleteData = await res.json();

    if (commentDeleteData.message = 'Destroy!') {
        const commentContainer = document.getElementById(`comment-wrapper-${commentId}`);
        const editDelContainer = document.getElementById(`edit-and-delete-${commentId}`);
        commentContainer.remove();
        editDelContainer.remove();
    }
}
