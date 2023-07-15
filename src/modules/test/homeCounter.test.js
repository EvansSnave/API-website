/**
 * @jest-environment jsdom
 */
import homeCounter from '../homeCounter.js';

describe('homeCounter', () => {
  test('should display "Pokemon (0)" when there are no pokemon', () => {
    document.body.innerHTML = `
      <h1 class="home__pokemon-amount">
        Pokemon (0)
      </h1>
    `;
    homeCounter([]);
    expect(document.querySelector('.home__pokemon-amount').textContent).toBe('Pokemon (0)');
  });

  test('should display "Pokemon (3)" when there are 3 pokemon', () => {
    document.body.innerHTML = `
      <h1 class="home__pokemon-amount">
        Pokemon (3)
      </h1>
    `;
    homeCounter(['Pikachu', 'Eevee', 'Charmander']);
    expect(document.querySelector('.home__pokemon-amount').textContent).toBe('Pokemon (3)');
  });

  test('should not throw an error when arr.length is undefined', () => {
    document.body.innerHTML = `
      <h1 class="home__pokemon-amount">
        Pokemon (0)
      </h1>
    `;
    expect(() => homeCounter(undefined)).not.toThrow();
  });
});
