const prompt = require('prompt-sync')()
const dayjs = require('dayjs');
const fs = require('fs');
//Expression  = code yg memiliki sebuah nilai
// statement
//`` backtik untuk ${variable}


let books = [];

const addBook = () =>{
    console.clear();
    const title = prompt("Masukan Nama Buku : ");
    const interest = prompt("Masukan Keunikan Buku : ");
    const price = prompt("Masukan Harga Buku : ");
    const added = dayjs().format("DD/MM/YYYY HH:mm:ss");

    books.push({
        title,
        interest,
        price,
        added
    });

    console.log(books);
    prompt("Press enter to continue...");
}

// 
const showBook = () =>{
    console.clear();
    for(book of books){
    console.log(`${book.title} ${book.interest}\nRp${book.price}\n${book.added}`);
    }
    prompt("Press enter to continue...");
    
}

const saveBook = () =>{
    fs.writeFileSync('favorite.json', JSON.stringify(books));
}
const getBooks = () =>{
    const data = fs.readFileSync("favorite.json");
    const books = JSON.parse(data);
    return books;
}

books = getBooks();

let running = true;
while(running == true){
    console.clear();
    console.log("1. Show Books\n2. Add Book\n3. Save & Exit\n");
    const choice = prompt("What do you want to do? ")
    if(choice == 1){
        showBook();
    }
    else if(choice == 2){
        addBook();
        
    }
    else if(choice == 3){
    saveBook();
     running = false;
    }
    else{
     console.log("none");
    }
    
}


