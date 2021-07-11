


function createTitle(bookTitle) {
  return `The ${bookTitle}`;
}

function buildMainCharacter(name, age, pronouns) {
  var mainBookCharacter = {
    name: name,
    age: age,
   pronouns: pronouns,
  };
  return mainBookCharacter;
}


function saveReview(bookReview, reviews) {
  for (var i = 0; i < reviews.length; i++) {
    if (bookReview === reviews[i]) {
      return;
    }
  }
  reviews.push(bookReview);
}

function calculatePageCount(title) {
return title.length * 20;
}


function writeBook(title, mainCharacter, genre) {
var newBook = {
  title: title,
  mainCharacter: mainCharacter,
  pageCount: calculatePageCount(title),
  genre: genre
}
return newBook;
}



function editBook(newBook) {
   newBook.pageCount = newBook.pageCount * 0.75;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
