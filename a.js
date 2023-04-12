// 1-Define a Book class with properties for title, author, and year.
// 2-Parse the JSON data into a JavaScript array of book objects using map function and  destructuring.
// 3-Use a static method on the Book class with json parameter to parse the JSON data and 
// ({    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }
// JSON.stringfy( {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  });) we gonna pass something like this as a parameter to this static function)
// 4-Use a getter method on the Book class to retrieve the author name.
// 5-Use the sort() method with a custom comparison function to sort the array of Book objects by author name.
// 6-Convert the sorted list of books into JSON format.
// 7-Output the sorted list of books in JSON format.
// 8- create promise which will take a book object and will check the year is bigger then 1950

const data =[  {    "title": "The Great Gatsby",    "author": "F. Scott Fitzgerald",    "year": 1925  },  {    "title": "To Kill a Mockingbird",    "author": "Harper Lee",    "year": 1960  },  {    "title": "The Catcher in the Rye",    "author": "J.D. Salinger",    "year": 1951  },  {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  }]

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    static parseData(book){
        let newBookData = JSON.parse(book)
        return new Book(newBookData.title,newBookData.author,newBookData.year)
    }
    get authorName() {
        return this.author;
      }
    
     
}

const books = data.map(({title,author,year})=>{
     let newBook = new Book(title,author,year);
     return newBook
})
console.log(books);

const sortedData = data.sort((a,b) => a.author.localeCompare(b.author));
let jsonSortedData = JSON.stringify(sortedData);
console.log(jsonSortedData);

const myPromise =(book) => {
    return new Promise((resolve,reject)=>{
        book.year > 1950 ? resolve("greater than 1950") : reject("lower than 1950") ;
    })
}
myPromise(books[0])
.then((result)=>console.log(result))
.catch((error)=>console.log(error));

console.log(Book.parseData(JSON.stringify( {    "title": "The Hobbit",    "author": "J.R.R. Tolkien",    "year": 1937  })));
