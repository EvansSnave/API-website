/**
 * @jest-environment jsdom
 */
import liking from '../addLikes.js';

describe('liking', () => {
  test('should return correct number of likes', () => {
    expect(liking(10)).toBe('<p class="likes">10 likes</p>');
  });

  test('should return correct text content when the number of likes is zero', () => {
    expect(liking(0)).toBe('<p class="likes">0 likes</p>');
  });
});
