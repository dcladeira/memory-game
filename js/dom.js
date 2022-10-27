
const match = new MemoryGame()

const startScreen = document.getElementById("startScreen")
const inputName = document.querySelector("#inputName")
const btnStart = document.getElementById("btnStart")
const gameScreen = document.querySelector("#gameScreen")
const gameName = document.getElementById("name")  // name e username são palavras reservadas

btnStart.addEventListener("click", (event) => {
    
    event.preventDefault()      // previne o recarregamento da página
    
    if(inputName.value === "") {
        alert("Digite um nome para iniciar o jogo.")
        // return
    }

    match.renderDeck()

    startScreen.style.display = "none"      // .style para manipular CSS
    gameScreen.style.display = "flex"

    gameName.innerText = inputName.value    /* passa o nome pra tag scan */

    settingUpGame()
})

function settingUpGame() {
    const allBackCards = document.querySelectorAll(".show")

    allBackCards.forEach((backCard) => {
        backCard.addEventListener("click", () => {
            let frontCard = backCard.previousElementSibling
            backCard.className = "hide backCard"
            frontCard.className = "show frontCard"
            match.flip(frontCard)
        })
    })
}

