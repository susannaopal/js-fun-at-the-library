


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


function writeBook() {

}



module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  // editBook
}
