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

                const commentData = await res.json();
                console.log('COMMENTDATA', commentData)

                if (commentData.message === 'Edit') {
                    const bodyElement = document.getElementById(`${commentData.comment.id}-comment-body-text`);

                    bodyElement.innerHTML = `${full_name}: ${commentData.comment.body}`
                    form.classList.add('hidden')
                }
            })
        })
    }
})
