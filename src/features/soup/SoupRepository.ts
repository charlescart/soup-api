/* eslint-disable no-param-reassign */
import soupDto from './validators/soupDto';
import summaryDto from './validators/summaryDto';

export default class SoupRepository {
  static Soup({ soup, searchWords }: soupDto): summaryDto {
    const summary: summaryDto = this.CreateSummary(searchWords);

    soup.forEach((row: string[], rowIndex: number) => {
      const numberColumns: number = row.length - 1;
      row.forEach((letter: string, columnIndex: number) => {
        // verificar de solo a una letra
        this.LookUpOneLetterWords(letter.toUpperCase(), summary);

        // mirando hacia la derecha
        this.LookToTheRight(columnIndex, numberColumns, summary, row);

        // mirando hacia la diagonal inferior derecha
        this.LookAtDiagonal(rowIndex, columnIndex, summary, soup);

        // mirando hacia abajo
        this.LookAtDown(soup, rowIndex, columnIndex, summary);

        // diagonal inferior izquierda
        this.LookAtDiagonalLeft(rowIndex, columnIndex, summary, soup);

        // mirando hacia la derecha
        this.LookAtLeft(soup, rowIndex, columnIndex, summary);

        // mirando hacia la diagonal superior izquierda
        this.LookAtTopLeftDiagonal(soup, rowIndex, columnIndex, summary);

        // mirando hacia arriba
        this.LookAtTop(soup, rowIndex, columnIndex, summary);

        // mirando hacia la diagonal superior derecha
        this.LookTopRightDiagonal(soup, rowIndex, columnIndex, summary);
      });
    });

    return summary;
  }

  static LookUpOneLetterWords(letter: string, summary: summaryDto): summaryDto {
    const wordsSizeOne: string[] = Object.keys(summary)
      .filter((word) => word.length === 1);

    for (let i = 0; i < wordsSizeOne.length; i += 1) {
      const word: string = wordsSizeOne[i];
      if (letter === word) summary[word] += 1;
    }

    return summary;
  }

  static LookToTheRight(columnIndex: number, columns: number, summary: summaryDto, row: string[]): summaryDto {
    const spaceToTheRight: number = columns - columnIndex;
    const words: string[] = Object.keys(summary)
      .filter((word) => (word.length - 1) >= 1 && (word.length - 1) <= spaceToTheRight);

    for (let i = 0; i < words.length; i += 1) {
      const word: string = words[i];
      const limit: number = (columnIndex + spaceToTheRight);
      const phrase: string = row
        .filter((item, index) => index >= columnIndex && index <= limit)
        .join('')
        .toUpperCase();

      if (word === phrase.substr(0, word.length)) summary[word] += 1;
    }

    return summary;
  }

  static LookAtDiagonal(rowIndex: number, columnIndex: number, summary: summaryDto, soup: string[][]): summaryDto {
    const numberRows: number = soup.length;
    let numberColumns: number = soup[rowIndex].length;
    let phraseDiagonal = '';

    for (let i = rowIndex; i < numberColumns; i += 1) {
      for (let j = columnIndex; j < numberColumns && i < numberRows; j += 1) {
        phraseDiagonal += soup[i][j].toUpperCase();
        i += 1;
        if (soup[i] !== undefined) numberColumns = soup[i].length;
      }
      break;
    }

    phraseDiagonal = phraseDiagonal.trim();

    if (phraseDiagonal.length > 1) {
      this.SearchPhraseMatch(phraseDiagonal, summary);
    }

    return summary;
  }

  static LookAtDown(soup: string[][], row: number, column: number, summary: summaryDto): summaryDto {
    let phrase = '';

    for (let i = row; i < soup.length; i += 1) {
      phrase += soup[i][column].toUpperCase();
      if (soup[i + 1] === undefined || (soup[i + 1].length - 1) < column) break;
    }

    phrase = phrase.trim();

    if (phrase.length > 1) {
      this.SearchPhraseMatch(phrase, summary);
    }

    return summary;
  }

  static LookAtDiagonalLeft(row: number, column: number, summary: summaryDto, soup: string[][]): summaryDto {
    let phrase = '';

    if (column > 0) {
      let i = row;
      for (let j = column; j >= 0 && i < soup.length; j -= 1) {
        phrase += soup[i][j].toUpperCase();
        i += 1;
        if (soup[i] !== undefined && soup[i].length < j) break;
      }

      phrase = phrase.trim();
      if (phrase.length > 1) this.SearchPhraseMatch(phrase, summary);
    }

    return summary;
  }

  static LookAtLeft(soup: string[][], row: number, column: number, summary: summaryDto): summaryDto {
    let phrase = '';

    for (let i = column; i >= 0; i -= 1) {
      phrase += soup[row][i].toUpperCase();
    }

    phrase = phrase.trim();
    if (phrase.length > 1) this.SearchPhraseMatch(phrase, summary);

    return summary;
  }

  static LookAtTopLeftDiagonal(soup: string[][], row: number, column: number, summary: summaryDto): summaryDto {
    let phrase = '';

    if (row && column > 0) {
      let i = row;
      for (let j = column; i >= 0 && j >= 0; j -= 1) {
        phrase += soup[i][j].toUpperCase();
        i -= 1;
      }
      phrase = phrase.trim();
    }

    if (phrase.length > 1) this.SearchPhraseMatch(phrase, summary);
    return summary;
  }

  static LookAtTop(soup: string[][], row: number, column: number, summary: summaryDto): summaryDto {
    let phrase = '';

    for (let i = row; i >= 0 && row > 0; i -= 1) {
      if ((soup[i].length - 1) < column) break;
      phrase += soup[i][column].toUpperCase();
    }

    phrase = phrase.trim();
    if (phrase.length > 1) this.SearchPhraseMatch(phrase, summary);
    return summary;
  }

  static LookTopRightDiagonal(soup: string[][], row: number, column: number, summary: summaryDto): summaryDto {
    let phrase = '';

    let j = column;
    for (let i = row; i >= 0 && row > 0; i -= 1) {
      phrase += soup[i][j].toUpperCase();
      j += 1;
      if (soup[i - 1] !== undefined && (soup[i - 1].length - 1) < j) break;
    }

    phrase = phrase.trim();
    if (phrase.length > 1) this.SearchPhraseMatch(phrase, summary);
    return summary;
  }

  static CreateSummary(words: string[]): summaryDto {
    const summary: summaryDto = {};

    for (let i = 0; i < words.length; i += 1) {
      const word: string = words[i];
      if (word.length > 0) summary[word.toUpperCase()] = 0;
    }

    return summary;
  }

  static SearchPhraseMatch(phrase: string, summary: summaryDto): summaryDto {
    const words: string[] = Object.keys(summary)
      .filter((word) => word.length > 1 && word.length <= phrase.length);

    words.forEach((word) => {
      if (word === phrase.substr(0, word.length)) summary[word] += 1;
    });

    return summary;
  }
}
