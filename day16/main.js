const smallCups = document.querySelectorAll(".glass")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const remained = document.getElementById("remained")

updateBigCup()

smallCups.forEach((glass, idx) => {

    glass.addEventListener("click", () => highlightCups(idx))

})

function highlightCups(idx) {
    if (smallCups[idx].classList.contains("active") && !smallCups[idx]
        .nextElementSibling.classList.contains("active")) {
        idx--
    }

    smallCups.forEach((glass, idx2) => {
        if (idx2 <= idx) {
            glass.classList.add("active")
        } else {
            glass.classList.remove("active")
        }
    })

    updateBigCup()
}

function updateBigCup() {

    const fullCups = document.querySelectorAll
        (".glass.active").length

    const totalCups = smallCups.length

    if (fullCups === 0) {
        percentage.style.visibility = "hidden"
        percentage.style.height = 0
    } else {
        percentage.style.visibility = "visible"
        percentage.style.height = `${fullCups / totalCups * 280}px`
        percentage.innerText = ` ${fullCups / totalCups * 100} %`

    }

    if (fullCups === totalCups) {
        remained.style.visibility = "hidden"
        remained.style.height = 0
    } else {
        remained.style.visibility = "visible"
        liters.innerText = `${2 - (250 * fullCups / 1000)}L`
    }



}