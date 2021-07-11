

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




function addBook(name, book) {
  // var library = createLibrary();
  // var library = {
  //   name: createLibrary(),
    // shelves: {
    //   fantasy: [],
    //   fiction: [],
    //   nonFiction: [],
    // }
    // library.shelves.genre.title


   // return name.shelves.fantasy.unshift(book);
   return name.shelves[book.genre].unshift(book);

}




module.exports = {
  createLibrary,
  addBook,
  // checkoutBook
};
