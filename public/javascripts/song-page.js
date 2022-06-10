window.addEventListener("DOMContentLoaded", (event) => {

    // grab the comment section box and submit comment button
    const commentBox = document.getElementById('comment-box')
    const commentButton = document.getElementById('submit-comment-button');

    // function for adding comment
    const addComment = async e => {

        // create a new comment wrapper div and append to comment box
        const newCommentWrapper = document.createElement('div');
        newCommentWrapper.setAttribute('class', 'comment-wrapper');
        commentBox.appendChild(newCommentWrapper);

        // create new anchor el and img el and append
        const newAnchor = document.createElement('a');
        newAnchor.setAttribute('href', '/users/momdemo');
        const newProfPic = document.createElement('img');
        newProfPic.setAttribute('src', comment.User.profilePic);
        newProfPic.setAttribute('class', 'comment-profile-pics');
        newAnchor.appendChild(newProfPic);
        newCommentWrapper.appendChild(newAnchor);

        // create new comment-bodies div and p and append
        const newCommentBodyDiv = document.createElement('div');
        newCommentBodyDiv.setAttribute('class', 'comment-bodies');
        const newCommentBodyText = document.createElement('p');
        newCommentBodyText.setAttribute('class', 'comment-body-text');
        newCommentBodyText.innerHTML = `${comment.User.full_name}: ${comment.body}`;
        newCommentBodyDiv.appendChild(newCommentBodyText);
        newCommentWrapper.appendChild(newCommentBodyDiv);
    }

    // event listener for submit comment button
    commentButton.addEventListener('click', addComment);
});
