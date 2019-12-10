import { getLetterMatchCount } from './index';

describe('', () => {
  const secretWord = 'party';

  it('returns correct count when no matching letters', () => {
    const letterMatchCount = getLetterMatchCount('bones', secretWord);
    expect(letterMatchCount).toBe(0);
  });
  it('returns correct count when 3 matching letters', () => {
    const letterMatchCount = getLetterMatchCount('train', secretWord);
    expect(letterMatchCount).toBe(3);
  });
  it('returns correct count when duplicate letters exist', () => {
    const letterMatchCount = getLetterMatchCount('parka', secretWord);
    expect(letterMatchCount).toBe(3);
  });
})