const book = [];

const inputTitle = document.querySelector("#text");
const inputAuthor = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.getElementById("container");
const books = document.querySelector('.books');
let i = 0;

myButton.addEventListener("click", (e)=>{
    if(inputTitle.value && inputAuthor.value != ""){
        e.preventDefault();
        const bookData = {
            title: inputTitle.value,
            author: inputAuthor.value
        }
        book.push(bookData)
        list.innerHTML = ''
        book.map((item) => (
            list.innerHTML += `
            <li id="bok">${item.title} by ${item.author}  <button type="button" class="btn btn-outline-primary" id="btn${i}">Remove</button></li> 
            `
        ))
        inputTitle.value = '';
        inputAuthor.value = '';   
        
        document.querySelector("#btn" + i)
        .addEventListener("click",function(){
            const remove1 = this.parentNode;
            console.log(remove1);
            list.removeChild(remove1);
        })

        i++;
       
    }
   
    
   

});