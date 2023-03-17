//const DRAG = document.querySelector(".drag")
//const DROP = document.querySelector(".drop")

//DRAG.addEventListener("dragend", dragHandler)

//DROP.addEventListener("drop", dropHandler)
//DROP.addEventListener("dragover", dragOverHandler)

//function dragHandler (event) {
    //event.target.style.left = event.x + "px"
    //event.target.style.top = event.y +  "px"
//}

//function dropHandler (event) {
    //alert ("hurra!") 
//}

//function dragOverHandler (event) {
    //event.preventDefault()
//}



const FORM = document.querySelector ("form")

FORM.addEventListener("submit", submitHandler)

function submitHandler(event){
event.preventDefault()

let errors = false

if (event.target.besked.value.indexOF("@") == -1){
    alert("du skal skrive en rigtig email")
    errors = true 
}

if (event.target.besked.value.length < 10){
    alert("du skal skrive mindst 10 tegn")
    errors = true
}

if (event.target.besked.value.length > 200){
    alert("fy")
    errors = true
}

if (!errors) {
    event.target. submit()
}
}