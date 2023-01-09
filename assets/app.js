const book = [];

const inputTitle = document.querySelector("#text");
const inputAuthor = document.querySelector("#txt");
const myButton = document.querySelector(".btn-list");
const list = document.getElementById("container");

myButton.addEventListener("click", (e)=>{
    if(inputTitle.value && inputAuthor.value != ""){
        e.preventDefault();
        const bookData = {
            title: inputTitle.value,
            author: inputAuthor.value
        }
        book.push(bookData)
        list.innerHTML = ''
        book.map((iauthortem) => (
            list.innerHTML += `
            <li>${item.title} by ${item.author}</li>
            `
        ))
        inputTitle.value = ''
        inputAuthor.value = ''
    }
})