var assert = require("chai").assert;

var {
  createLibrary,
  addBook,
  checkoutBook
} = require("../src/library.js")

describe("library.js", function() {
  describe("createLibrary", function() {
    it("should be a function", function() {
      assert.isFunction(createLibrary);
    });
// naming a library something specific
    it("should have a name", function() {
      var denverLibrary = createLibrary("Denver Public Library");
//output neets to be equal to below
    assert.equal(denverLibrary.name, "Denver Public Library");
    });

    it("should be able to have a different name", function() {
      var goldenLibrary = createLibrary("Golden Public Library");

      assert.equal(goldenLibrary.name, "Golden Public Library");
    });
//need to add shelves to object?
    it("should have shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      assert.isObject(denverLibrary.shelves);
    });

    it("should have several different types of shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      assert.deepEqual(denverLibrary.shelves.fantasy, []);
      assert.deepEqual(denverLibrary.shelves.fiction, []);
      assert.deepEqual(denverLibrary.shelves.nonFiction, []);
    });
  });

  describe("addBook", function() {
    it("should add book to the fantasy shelf", function() {
      var denverLibrary = createLibrary("Denver Public Library");
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }

      addBook(denverLibrary, dracula);

      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
    });

    it("should add books to the correct shelves automatically", function() {
      var denverLibrary = createLibrary("Denver Public Library");
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Draula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var paleBlueDot = {
        title: "The Pale Blue Dot",
        mainCharacter: undefined,
        pageCount: 187,
        genre: 'nonFiction'
      }

      addBook(denverLibrary, dracula);
      addBook(denverLibrary, paleBlueDot);
//there needs to be a way to check which genre the shelf is to add the book
      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
      assert.equal(denverLibrary.shelves.nonFiction[0], paleBlueDot);
    });
  });
//this function is asking to unshelf the book to check it out to a patron
//books are objects with an object within it about mainCharacter
  describe("checkoutBook", function() {
    it("should unshelf a book to check out a book to a patron", function() {
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var bornACrime = {
        title: "Born a Crime",
        mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
        pageCount: 304,
        genre: "nonFiction"
      }
      var prideAndPrejudice = {
        title: "Pride and Prejudice",
        mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
        pageCount: 432,
        genre: "fiction"
      }
      var denverLibrary = createLibrary("Denver Public Library");
//function is addBook with 2 parameters: the  place (denverLibrary) & book(param for book title)
      addBook(denverLibrary, dracula);
      addBook(denverLibrary, bornACrime);
      addBook(denverLibrary, prideAndPrejudice);
//this result is telling us that the checkedout book the title and its shelf location
//so (3 params which will need 3 arguments: libraryName, book, genre)
      var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");
//this shows that the library will still have the other two books on the shelves by genre
      assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: [bornACrime]});;
      assert.equal(result1, "You have now checked out Pride and Prejudice from the Denver Public Library");
//the other result tells us that we will checkout from same libraryName, the title, and genre
      var result2 = checkoutBook(denverLibrary, "Born a Crime", "nonFiction");
//the second result will vary from the first because a second book will have been
//pulled from the shelf to check it out
      assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: []});;
      assert.equal(result2, "You have now checked out Born a Crime from the Denver Public Library")
    });

    it("should only checkout a book if the book is on the shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      var error1 = checkoutBook(denverLibrary, "The Fifth Season", "fantasy");

      assert.equal(error1, "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library");

      var error2 = checkoutBook(denverLibrary, "Yes Please", "nonFiction");

      assert.equal(error2, "Sorry, there are currently no copies of Yes Please available at the Denver Public Library");
    });
  });
});
