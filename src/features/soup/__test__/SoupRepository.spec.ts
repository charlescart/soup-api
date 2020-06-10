import SoupRepository from '../SoupRepository';
import Summary from '../validators/summaryDto';

describe('SoupRepository', () => {
  it('CreateSummary', () => {
    const words: string[] = ["oiE", "ixE", "Ix", "i", "O", "awds", "e4", "", "oi", "eX"];
    let summary: Summary = SoupRepository.CreateSummary(words);

    expect(summary).toMatchSnapshot();
  });

  it('LookUpOneLetterWords', () => {
    const words: string[] = ['o', 'I', 'e', 'X', '4', 'f', 'k', 'p', '1', '2', '3'];
    let summary: Summary = SoupRepository.CreateSummary(words);
    const soup: string[][] = [
      ["o", "I", "E"],
      ["I", "i", "X", "4"],
      ["E", "x", "E"],
      ["E", "X"],
      ["e"],
      [""]
    ];

    soup.forEach((row: string[]) => {
      row.forEach((letter: string) => {
        letter = letter.toUpperCase();
        summary = SoupRepository.LookUpOneLetterWords(letter, summary);
      });
    });

    expect(summary).toMatchSnapshot();
  });
});