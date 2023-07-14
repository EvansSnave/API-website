import commentCounter from './commentCounter.js';
import getComment from './getComments.js';

const loading = async (id) => {
  const table = document.querySelector('.comments-table');
  const arrayComments = await getComment(id);
  table.innerHTML = '';
  arrayComments.forEach((comments) => {
    const htmlContent = `
    <tr class="data-dom">
      <td class="data-date">${comments.creation_date}</td>
      <td class="data-user">${comments.username}</td>
      <td class="data-comment">${comments.comment}</td>
    </tr>
    `;
    table.insertAdjacentHTML('afterbegin', htmlContent);
  });
  commentCounter(arrayComments);
};

export default loading;