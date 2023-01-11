var billInput = document.querySelector(".billInput")
var tipsCustom = document.querySelector(".customTip")
var people = document.querySelector(".peopleInput")

const totalPerson = document.querySelector(".totalPerson")
var totalTips = document.querySelector(".totalTips")

const allTips = document.querySelectorAll(".allTips")
allTips[0].addEventListener("click", () => allTips[0].style.background = "hsl(172, 67%, 45%)")
allTips[1].addEventListener("click", () => allTips[1].style.background = "hsl(172, 67%, 45%)")
allTips[2].addEventListener("click", () => allTips[2].style.background = "hsl(172, 67%, 45%)")
allTips[3].addEventListener("click", () => allTips[3].style.background = "hsl(172, 67%, 45%)")
allTips[4].addEventListener("click", () => allTips[4].style.background = "hsl(172, 67%, 45%)")

var tips = 0
var bill = 0
var personas = 0

const datos = () => {
    totalPerson.innerHTML = "$0"
    totalTips.innerHTML ="$0"
}

const actualizar = () => {
    bill = parseFloat(billInput.value)
    totalPerson.innerHTML = "$" + (bill / personas)
    totalTips.innerHTML = "$" + ((bill * tips) / 100) / personas
    personas = parseFloat(people.value)
    totalPerson.innerHTML = "$" + (bill / personas)
    totalTips.innerHTML = "$" + ((bill * tips) / 100) / personas
}

const reset = () => {
    tips = 0
    bill = 0
    personas = 0
    totalPerson.innerHTML = "$0"
    billInput.value = ""
    people.value = ""
    tipsCustom.value = ""
    totalTips.innerHTML = "$0"
}


const tip1 = () => {tips = 5, actualizar()}
const tip2 = () => {tips = 10, actualizar()}
const tip3 = () => {tips = 15, actualizar()}
const tip4 = () => {tips = 25, actualizar()}
const tip5 = () => {tips = 50, actualizar()}
tipsCustom.addEventListener("input", () => {
    tips = tipsCustom.value
    actualizar()
})

billInput.addEventListener("input", () => {
    actualizar()
    billInput.style.backgroundImage = ""
})
people.addEventListener("input", () => {
    actualizar()
})
