

function createLibrary(name) {
  return {
      name: name,
      shelves: {
        fantasy: [],
        fiction: [],
        nonFiction: [],
      }
    }
  };




function addBook(libraryName, book) {
   return libraryName.shelves[book.genre].unshift(book);
}




function checkoutBook(libraryName, title, genreShelf) {
  for (var i = 0; i < libraryName.shelves[genreShelf].length; i++) {
    if (title === libraryName.shelves[genreShelf][i].title) {
      libraryName.shelves[genreShelf].splice(i, 1);
        return `You have now checked out ${title} from the ${libraryName.name}`;
      }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${libraryName.name}`;
}


//matters where you put the return
//
module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
