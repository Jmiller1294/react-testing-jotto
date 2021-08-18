import { getLetterMatchCount } from ".";

describe('getLetterMatchCount', () => {
  const secretWord = 'party';
  test('returns the correct count when there are no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('hello', secretWord);
    expect(getLetterMatchCount).toBe(0);
  })
  test('returns the correct count when there are three matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  })

  test('returns the correct count when there are duplicate letters in the guess', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  })
})
