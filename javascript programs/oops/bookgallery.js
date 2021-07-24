class Bookgallery {
    Books = {
        "the alchemist": { book_name: "the alchemist", author: "paulo", price: 200, numberofcopies: 5, sold: 2 },
        "ulysses": { book_name: "ulysses", author: "james joyce", price: 400, numberofcopies: 2, sold: 1 },
        "moby dick": { book_name: "moby dick", author: "herman melville", price: 500, numberofcopies: 5, sold: 3 }

    }
    /* getBook(){
         let books={
             "the alchemist":{book_name:"the alchemist",author:"paulo",price:200,numberofcopies:5,sold:2},
             "ulysses":{book_name:"ulysses",author:"james joyce",price:400,numberofcopies:2,sold:1},
             "moby dick":{book_name:"moby dick",author:"herman melville",price:500,numberofcopies:5,sold:3}
         }
         return books
         }*/
        //  find a particular book
    findbook(bookname) {
        let getbookDetails = this.Books;
        if (bookname in getbookDetails) {
            return 1;
        }
        else {
            return 0;
        }
    }
    availableBooks(bookname) {
        let getbookDetails = this.Books;
        if (bookname in getbookDetails) {
            var availableCopies = getbookDetails[bookname]["numberofcopies"] - getbookDetails[bookname]["sold"]
            console.log("the number of available copies are" + availableCopies);
            return 1;
        }
        else {
            return 0;
        }
    }

    highestSoldauthor() {

        let getbookDetails = this.Books;
        let Bookdetails = Object.entries(getbookDetails).reduce((book1, book2) => book1[1].sold > book2[1].sold ? book1[1].author : book2[1].author)
        console.log(`highest sold book author is ${Bookdetails}`);
    }

}
var book1 = new Bookgallery();
var verification = book1.availableBooks("ulysses");
var res = verification == 1 ? "success" : "failed"
console.log(res);
book1.highestSoldauthor();
