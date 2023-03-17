const LEAVES = document.querySelector(".leaves");
const TEACHER = document.querySelector(".teacher");
const FISH = document.querySelector(".fish");

const TIGER = document.querySelector(".tiger");
const OTTER = document.querySelector(".otter");
const SLOTH = document.querySelector(".sloth");

LEAVES.addEventListener("dragend", dragHandler)
TEACHER.addEventListener("dragend", dragHandler)
FISH.addEventListener("dragend", dragHandler)

TIGER.addEventListener("drop", dropHandler)
TIGER.addEventListener("dragover", dragOverHandler)

OTTER.addEventListener("drop", dropHandler)
OTTER.addEventListener("dragover", dragOverHandler)

SLOTH.addEventListener("drop", dropHandler)
SLOTH.addEventListener("dragover", dragOverHandler)

function dragHandler (event) {
    event.target.style.left = event.x + "px"
    event.target.style.top = event.y +  "px"
}

function dropHandler () {
    alert ("hurra!")    
}

 function dragOverHandler (event) {
     event.preventDefault()
}

// BRUG IF ELSE TIL AT FINDE UD AF HVILKE MAD DYRENE KAN LIDE. TIGER - TRUE TEACHER. FALSE FISH. FALSE LEAVES. SLOTH - TRUE LEAVES. FALSE FISH FALSE TEACHER. OTTER - TRUE FISH. FALSE LEAVES. FALSE TEACHER. 
 