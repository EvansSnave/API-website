import commentSent from './addComment';
import getComment from './getComments';
import loading from './loadComments';

const submit = (id) => {
  const submitButton = document.querySelector('.comment-button');
  const name = document.querySelector('.user-name');
  const comments = document.querySelector('.comment');
  const form = document.querySelector('form');
  form.addEventListener('submit', event => {
    event.preventDefault();
  });
  submitButton.addEventListener('click', async () => {
    const commentData = {
      name: name.value,
      id: id,
      comment: comments.value,
    }
    await commentSent(commentData);
    await getComment(id);
    loading(id);
    name.value = '';
    comments.value = '';
});
}

export default submit;