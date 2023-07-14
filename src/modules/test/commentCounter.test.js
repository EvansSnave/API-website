/**
 * @jest-environment jsdom
 */
import commentCounter from '../commentCounter'

describe('commentCounter', () => {
  test('should display "Comments (0)" when there are no comments', () => {
    document.body.innerHTML = `
        <p class="comments-number">
          Comments (0)
        </p>
    `;
    const arr = [
      {
        username: 'no one has commented yet',
      },
    ];
    commentCounter(arr);
    expect(document.querySelector('.comments-number').innerHTML).toBe('Comments (0)');
  });

  test('should display "Comments (3)" when there are 3 comments', () => {
    const arr = [
      {
        username: 'user1',
      },
      {
        username: 'user2',
      },
      {
        username: 'user3',
      },
    ];
    commentCounter(arr);
    expect(document.querySelector('.comments-number').innerHTML).toBe('Comments (3)');
  });
});
