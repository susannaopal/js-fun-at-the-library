


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

function saveReview() {

}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
