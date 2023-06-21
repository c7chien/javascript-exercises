const getTheTitles = function(books) {
    const bookTitles = books.map(x => x.title);
    return bookTitles;
};


const books = [
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
]

console.log(getTheTitles(books));



// Do not edit below this line
module.exports = getTheTitles;
