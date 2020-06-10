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
        SoupRepository.LookUpOneLetterWords(letter, summary);
      });
    });

    expect(summary).toMatchSnapshot();
  });

  it('LookToTheRight', () => {
    const words: string[] = ["oiE", "Oi", "ie", "ii", "eXe", "EX", "XE", "X4", "IIX4", "", "palabraSuperGrande"];
    let summary: Summary = SoupRepository.CreateSummary(words);
    const soup: string[][] = [
      ["o", "I", "E"],
      ["I", "i", "X", "4"],
      ["E", "x", "E"],
      ["E", "X"],
      ["e"],
      [""]
    ];

    soup.forEach((row: string[], rowIndex: number) => {
      const numberColumns: number = row.length - 1;
      row.forEach((letter: string, columnIndex: number) => {
        letter = letter.toUpperCase();
        SoupRepository.LookToTheRight(columnIndex, numberColumns, summary, row);
      });
    });

    expect(summary).toMatchSnapshot();
  });

  it('LookAtDiagonal', () => {
    const words: string[] = ["palabraSuperGrande", "oie", "OI", "iX", "E4", "Ex", ""];
    let summary: Summary = SoupRepository.CreateSummary(words);
    const soup: string[][] = [
      ["o", "I", "E"],
      ["I", "i", "X", "4"],
      ["E", "x", "E"],
      ["E", "X"],
      ["e"],
      [""]
    ];

    soup.forEach((row: string[], rowIndex: number) => {
      const numberColumns: number = row.length - 1;
      row.forEach((letter: string, columnIndex: number) => {
        letter = letter.toUpperCase();
        SoupRepository.LookAtDiagonal(rowIndex, columnIndex, summary, soup);
      });
    });

    expect(summary).toMatchSnapshot();
  });

  it('LookAtDown', () => {
    const words: string[] = ["palabraSuperGrande", "oie", "OI", "oieee", "IIXX", "ii", "IiX", "iX", "E4", "Ex", "E5", "4", "EE", "xx"];
    let summary: Summary = SoupRepository.CreateSummary(words);
    const soup: string[][] = [
      ["o", "I", "E"],
      ["I", "i", "X", "4"],
      ["E", "X", "E"],
      ["E", "X", "E", "5"],
      ["E"],
      [" "]
    ];

    soup.forEach((row: string[], rowIndex: number) => {
      row.forEach((letter: string, columnIndex: number) => {
        letter = letter.toUpperCase();
        SoupRepository.LookAtDown(soup, rowIndex, columnIndex, summary);
      });
    });

    expect(summary).toMatchSnapshot();
  });

  it('SearchPhraseMatch', () => {
    const phrases: string[] = ["OIEEE", "IIXX", "EXEE", "IEEE", "IXX", "XEE", "EEE", "XX", "EE", "EE"];
    const words: string[] = ["palabraSuperGrande", "oie", "OI", "oieee", "IIXX", "ii", "IiX", "iX", "E4", "Ex", "E5", "4", "EE", "xx"];
    const summary: Summary = SoupRepository.CreateSummary(words);

    phrases.forEach(phrase => SoupRepository.SearchPhraseMatch(phrase, summary));

    expect(summary).toMatchSnapshot();
  });
});