console.log('A5.9_HW_2');
console.log('---- ---- ----');

console.log('Exercise 1');
console.log('---- ---- ----');

function printBookDetails(book) {
  console.log('1.1');
  if (book.pages >= 500) {
    console.log('The book, ' + book.title + ' is long.');
  } else {
    console.log('The book, ' + book.title + ' is not long.');
  }
  console.log('---- ---- ----');

  console.log('1.2');
  book.cover = 'Hard Cover';
  console.log('The book, ' + book.title + ' has ' + book.cover + '.');
  console.log('---- ---- ----');

  console.log('1.3');
  if (book.cover === 'Hard Cover' && book.pages > 300) {
    console.log('The book, ' + book.title + ' is heavy.');
  } else {
    console.log('The book, ' + book.title + ' is not haevy.');
  }
  console.log('---- ---- ----');
}

const book = {
  title: 'The Great Gatsby',
  author: 'F.Scott Fitzgerald',
  genre: 'Fiction, Classic',
  pages: 650,
};

printBookDetails(book);

console.log('Exercise 2');
console.log('---- ---- ----');

function printWeatherdata(weatherData) {
  console.log('2.1');
  console.log('weatherData object:', weatherData);
  console.log('---- ---- ----');

  console.log('2.2');
  const newWeatherData = { ...weatherData };
  console.log(
    'Is newWeatherData object same as weatherData object? ',
    newWeatherData === weatherData
  );
  console.log('---- ---- ----');

  console.log('2.3');
  if (newWeatherData.humidity > 65) {
    newWeatherData.weatherCondition = 'Cloudy';
  }

  console.log('newWeatherData object:', newWeatherData);
  console.log('---- ---- ----');
}

const weatherData = {
  city: 'Tokyo',
  temperature: '28°C',
  humidity: 70,
  weatherCondition: 'Partly Cloudy',
};

printWeatherdata(weatherData);

console.log('Exercise 3');
console.log('---- ---- ----');

function compareBookPages(book1, book2) {
  if (book1.pages > book2.pages) {
    return true;
  } else {
    return false;
  }
}

const book1 = {
  title: 'To Kill a Mockingbird',
  pages: 281,
};

const book2 = {
  title: '1984',
  pages: 328,
};

console.log(
  'Is number of pages of ' +
    book1.title +
    ' greater than ' +
    book2.title +
    '? ',
  compareBookPages(book1, book2)
);
console.log('---- ---- ----');

console.log('Exercise 4');
console.log('---- ---- ----');

function compareBooks(bookOne, bookTwo) {
  console.log('4.1');
  console.log('bookOne object:', bookOne);
  console.log('bookTwo object:', bookTwo);
  console.log('---- ---- ----');

  console.log('4.2');
  if (bookOne.numberOfPages > bookTwo.numberOfPages) {
    console.log(bookOne.title + ' is thicker than ' + bookTwo.title + '.');
  } else {
    console.log(bookTwo.title + ' is thicker than ' + bookOne.title + '.');
  }
  console.log('---- ---- ----');

  console.log('4.3');
  if (bookOne.author === bookTwo.author) {
    console.log(
      'Both books are written by same author, ' + bookOne.author + '.'
    );
  } else {
    console.log('The books are written by different authors.');
  }
}

const bookOne = {
  title: 'Animal Farm',
  author: 'George Orwell',
  numberOfPages: 140,
};

const bookTwo = {
  title: 'Coming Up for Air',
  author: 'George Orwell',
  numberOfPages: 210,
};

compareBooks(bookOne, bookTwo);
