/* eslint-disable no-unused-vars */

<<<<<<< HEAD
const book = [];

const inputTitle = document.querySelector("#text");
const inputAuthor = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.getElementById("book-list");
const books = document.querySelector('.books');
let i = 0;


myButton.addEventListener("click", (e)=>{
    if(inputTitle.value && inputAuthor.value != ""){
        e.preventDefault();
        const bookData = {
            title: inputTitle.value,
            author: inputAuthor.value,
        }
        book.push(bookData)
        list.innerHTML = ''
        book.map((item) => (
            list.innerHTML += `
            <li id="bok">${item.title} by ${item.author}  
            <button type="button" class="btn btn-outline-primary delete-btn" id="btns-${i++}">
            Remove</button></li> 
            `
            ));
    
        document.querySelector('form').reset()  

        const buttonItem = document.querySelectorAll('.delete-btn')
        buttonItem.forEach((item) => {
            item.addEventListener('click', (e) => {
                const buttonElem = document.getElementById('book-list')
                const btnEle = document.getElementById(item.id)
                buttonElem.removeChild(btnEle.parentElement)
            })
        }) 
       
    }

});


=======
const book = JSON.parse(localStorage.getItem('books-list')) || [];

const inputTitle = document.querySelector('#text');
const inputAuthor = document.querySelector('#txt');
const myButton = document.querySelector('.btn-list');
const list = document.getElementById('container');
const books = document.querySelector('.books');
let i = 0;

myButton.addEventListener('click', (e) => {
  if (inputTitle.value && inputAuthor.value !== '') {
    e.preventDefault();
    const bookData = {
      title: inputTitle.value,
      author: inputAuthor.value,
    };
    book.push(bookData);
    localStorage.setItem('books-list', JSON.stringify(book));
    list.innerHTML = '';
    book.map((item) => (
      list.innerHTML += `
            <li id="bok">${item.title} by ${item.author}  <button type="button" class="btn btn-outline-primary" id="btn${i}">Remove</button></li> 
            `
    ));
    document.querySelector('form').reset();

    document.querySelector(`#btn${i}`)
      .addEventListener('click', function () {
        const remove1 = this.parentNode;
        list.removeChild(remove1);
        book.splice(i, 1);
        localStorage.setItMem('books-list', JSON.stringify(book));
      });

    i += 1;
  }
});
>>>>>>> 35feb3b4f6874f40f284002ffb150c209fd0f3e6
