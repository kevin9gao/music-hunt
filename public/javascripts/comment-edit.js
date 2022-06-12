window.addEventListener('DOMContentLoaded', (event) => {
    const editButtons = document.querySelectorAll('.edit-button');

    const loggedInUser = document.getElementById('current-user').value;
    const loggedInUserJSON = JSON.parse(loggedInUser);
    const full_name = loggedInUserJSON.full_name;

    for (let i = 0; i < editButtons.length; i++) {
        const edit = editButtons[i];
        edit.addEventListener('click', (e) => {
            const commentId = e.target.id.split('-')[2];
            const form = document.getElementById(`edit-form-${commentId}`);

            if (form.classList.contains('hidden')) {
                form.classList.remove('hidden');
            } else {
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
                console.log('COMMENTDATAEDIT', commentDataEdit)

                if (commentDataEdit.message === 'Edit') {
                    const bodyElement = document.getElementById(`${commentDataEdit.comment.id}-comment-body-text`);
                    const bodyTextArea = document.getElementById(`${commentDataEdit.comment.id}-edit-comment`)

                    bodyElement.innerHTML = `${full_name}: ${commentDataEdit.comment.body}`
                    form.classList.add('hidden')
                    bodyTextArea.value = '';
                }

                editButtons = document.querySelectorAll('.edit-button');
            })
        })
    }
})
