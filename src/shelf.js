
function shelfBook(book, shelf) {
  if (shelf.length < 3) {
    shelf.unshift(book);
  }
}



function unshelfBook(bookTitle, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (bookTitle === shelf[i].title) {
    shelf.splice(i, 1);
    }
  }
}



function listTitles(shelf) {
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
       titles.push(shelf[i].title);
    }
    return titles.join(', ');
  }




function searchShelf (bookShelf) {
  var nonFictionTitles = [];
  for (var i = 0; i < bookShelf.length; i++) {
    titles.push(bookShelf[i].title);
  }
  return nonFictionTitles;
}


// function searchShelf(bookShelf) {
//   var nonFictionTitles = [];
//   for (var i = 0; i < bookShelf.lenth; i++) {
//     if (titles[i].number > 1) {
//       return true;
//     }
//     // else false;
//   }
// }

// for (var i = 0; i < arrayToCheck.length; i++) {
//   if (arrayToCheck[i].number > 1) {
//     return true;
//   }
// }
//
// return false;


module.exports = {
   shelfBook,
   unshelfBook,
  listTitles,
  searchShelf
};
