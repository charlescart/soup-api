/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-console */
/* eslint-disable class-methods-use-this */
import soupDto from './validators/soupDto';
import summaryDto from './validators/summaryDto';

export default class SoupRepository {
  static Soup({ soup, searchWords }: soupDto): summaryDto {
    const summary: summaryDto = this.CreateSummary(searchWords);

    const numberRows: number = soup.length - 1;
    soup.forEach((row: string[], rowIndex: number) => {
      const numberColumns: number = row.length - 1;
      row.forEach((letter: string, columnIndex: number) => {
        letter = letter.toUpperCase();

        this.LookUpOneLetterWords(letter, summary);
        this.LookToTheRight(columnIndex, numberColumns, summary, row);
        this.LookAtDiagonal(rowIndex, columnIndex, summary, soup);
        this.LookAtDown(soup, rowIndex, columnIndex, summary);
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
        if (soup[i]) numberColumns = soup[i].length;
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
