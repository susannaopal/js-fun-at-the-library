

function createLibrary(name) {
  // var library = {
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
    //library shelves genre book
  }
  // return libraryName.shelves[genreShelf].splice();

}
 //what kind of data types they are and
 // how they are nested

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
