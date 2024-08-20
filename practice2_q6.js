console.log('Question 6');

const libraryBooksData = [
  {
    title: 'Book A',
    author: 'Author X',
    genre: 'Fantasy',
    pages: 300,
    publicationYear: 2005,
  },
  {
    title: 'Book B',
    author: 'Author Y',
    genre: 'Mystery',
    pages: 250,
    publicationYear: 2010,
  },
  {
    title: 'Book C',
    author: 'Author Z',
    genre: 'Science Fiction',
    pages: 400,
    publicationYear: 2015,
  },
  {
    title: 'Book D',
    author: 'Author W',
    genre: 'Romance',
    pages: 350,
    publicationYear: 2008,
  },
  {
    title: 'Book E',
    author: 'Author V',
    genre: 'Science Fiction',
    pages: 450,
    publicationYear: 2020,
  },
];

function getMostPagesBook(data) {
  let mostPages = data[0];
  for (let i = 1; i < data.length; i++) {
    if (data[i].pages > mostPages.pages) {
      mostPages = data[i];
    }
  }
  return mostPages;
}

function getAvgYear(data) {
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total = total + data[i].publicationYear;
  }
  return total / data.length;
}

function getScienceBooks(data, genre) {
  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].genre === genre) {
      result.push(data[i]);
    }
  }
  return result;
}

function generateReport(data) {
  let mostPagesBook = getMostPagesBook(data);
  let avgYear = getAvgYear(data);
  let scienceBooks = getScienceBooks(data, 'Science Fiction');

  let report = 'Books Library';
  report += '\n---- ---- ----\n';
  report += '----Most Pages Book----\n';
  report += 'Name: ' + mostPagesBook.title;
  report += '\nAuther: ' + mostPagesBook.author;
  report += '\nGenre: ' + mostPagesBook.genre;
  report += '\nNumber of pages: ' + mostPagesBook.pages;
  report += '\n---- ---- ----';
  report += '\nAverage publication year: ' + avgYear;
  report += '\n---- ---- ----';

  report += '\nScience Fiction Books: ';
  for (let i = 0; i < scienceBooks.length; i++) {
    report += '\nName: ' + scienceBooks[i].title;
    report += '\nAuthor: ' + scienceBooks[i].author;
    report += '\nNumber of pages: ' + scienceBooks[i].pages;
    report += '\nPublication year: ' + scienceBooks[i].publicationYear;
    report += '\n';
  }
  return report;
}

console.log(generateReport(libraryBooksData));
console.log('---- ---- ----');
