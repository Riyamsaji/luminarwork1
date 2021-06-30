class Bookgallery{
    getBook(){
        let books={
            "the alchemist":{book_name:"the alchemist",author:"paulo",price:200,numberofcopies:5},
            "ulysses":{book_name:"ulysses",author:"james joyce",price:400,numberofcopies:2},
            "moby dick":{book_name:"moby dick",author:"herman melville",price:500,numberofcopies:5}
        }
        return books
        }
        findbook(bookname){
            let getbookDetails=this.getBook();
            if(bookname in getbookDetails){
                return 1;
            }
            else{
                return 0;
            }
        }
    }
var book1=new Bookgallery();
var verification=book1.findbook("ulysses");
var res=verification==1?"success":"failed"
console.log(res);