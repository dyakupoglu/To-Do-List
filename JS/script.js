const addItem = document.querySelector(`.myBtn`)
const removeItem = document.querySelector(`.remove`)
const myInput = document.querySelector(`.myInput`)
const myList = document.querySelector(`.list1`)

addItem.addEventListener("click", function () {
    if (myInput.value == "") {
        console.log("alert")
    }
    else {
        const newTodo = document.createElement("li")
        const newText = document.createElement("span")
        const newRemove = document.createElement("button")
        newRemove.classList.add("remove")
        newRemove.textContent = "x"
        newText.innerHTML = myInput.value
        newTodo.appendChild(newText)
        newTodo.appendChild(newRemove)
        myList.appendChild(newTodo)
        myInput.value = ""
    }
})

const checkedList = document.querySelector("ul");
checkedList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
});

for (let i = 0; i < removeItem.length; i++) {
    removeItem[i].onclick = function () {
        let div = this.parentElement;
        div.removeChild()
    }
}