/* eslint-disable no-unused-vars */

const book = JSON.parse(localStorage.getItem('our-books'))||[];

const inputTitle = document.querySelector("#text");
const inputAuthor = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.getElementById("book-list");
const books = document.querySelector('.books');
let i = 0;

function disp(){
    list.innerHTML = ''
    book.map((item) => (
        list.innerHTML += `
        <li id="bok">${item.title} by ${item.author} <br> 
        <button type="button" class="btn btn-outline-primary delete-btn" id="btns-${i++}">
                        Remove</button> </li> <hr>
        `
        ));
        const buttonItem = document.querySelectorAll('.delete-btn')
        buttonItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                const buttonElem = document.getElementById('book-list')
                const btnEle = document.getElementById(item.id)
                buttonElem.removeChild(btnEle.parentElement)
                console.log

            })
        }) 
}

myButton.addEventListener("click", (e)=>{
    if(inputTitle.value && inputAuthor.value != ""){
        e.preventDefault();
        const bookData = {
            title: inputTitle.value,
            author: inputAuthor.value,
        }
        book.push(bookData)
        localStorage.setItem('our-books',JSON.stringify(book))
       
        disp();
    
        document.querySelector('form').reset()  
       
    }

});


disp();