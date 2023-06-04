const fill = document.querySelector(".fill")
const empties = document.querySelectorAll(".box")

fill.addEventListener("dragstart", dragStart)
fill.addEventListener("dragend", dragEnd)


for (const box of empties) {
    box.addEventListener("dragover", dragOver)
    box.addEventListener("dragenter", dragEnter)
    box.addEventListener("dragleave", dragLeave)
    box.addEventListener("drop", dragDrop)
}

function dragStart() {
    console.log("drag start")

    this.className += " hold"
    setTimeout(() => this.className = "invisible", 0 )
}

function dragEnd() {

    // console.log("drag end")

    this.className = "fill"

}

function dragOver(e) {
    
    // console.log("drag over")

    e.preventDefault()
}

function dragEnter(e) {

    // console.log("drag enter")

    e.preventDefault()
    this.className += " hovered"
}

function dragLeave() {

    // console.log("drag leave")

    this.className = "box"
}

function dragDrop() {

    // console.log("drag drop")

    this.className ="box"
    this.append(fill)
}