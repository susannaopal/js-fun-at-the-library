
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}



module.exports = {
   shelfBook,
   //unshelfBook,
  // listTitles,
  // searchShelf
};
