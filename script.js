let inputText = document.getElementById("text")
let lista = document.getElementById("lista")

onload = function() {

    let text = localStorage.getItem("text")
    let lista = document.getElementById("lista")
    lista.innerHTML = text

}

function enter() {
    let text = inputText.value
    if (text !="") {
        inputText.value = ""
        lista.innerHTML += `
        <li class = "d-flex align-items-center justify-content-between p-2 "><span>${text}</span>
            <div>
                <button class = "editBtn btn btn-dark" onclick="edit(this)">Edit</button>
                <button class = "doneBtn btn btn-dark" onclick="toggleDone(this)">ok</button>
                <button class = "btn btn-danger px-2" onclick="del(this)">X</button>
            </div>
        </li>`
        localStorage.setItem("text", lista.innerHTML)
    }
}

function apagar() {
    lista.innerHTML = `<li></li>`
    localStorage.setItem("text", lista.innerHTML)

}

function toggleDone(element) {
    element.parentElement.parentElement.querySelector('span').classList.toggle("done")
    localStorage.setItem("text", lista.innerHTML)
}

function del(element) {
    element.parentElement.parentElement.remove()
    localStorage.setItem("text", lista.innerHTML)

}

function edit(element) {
    let span = element.parentElement.parentElement.firstChild
    if (!span.hasAttribute("contentEditable")) {
        span.setAttribute("contentEditable", "true")
    } else {
        localStorage.setItem("text", lista.innerHTML)
        span.removeAttribute("contentEditable")
    }
}

addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        enter()
    }
})