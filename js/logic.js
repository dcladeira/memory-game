class MemoryGame {
    constructor() {
        this.deck = [
            "../img/harmonia.svg",
            "../img/poder.svg",
            "../img/projetar.svg",
            "../img/refletir.svg",
            "../img/harmonia.svg",
            "../img/poder.svg",
            "../img/projetar.svg",
            "../img/refletir.svg",
        ];
        this.cardSelected = [];
    }

    // virar as cartas do jogo
    flip(card) {
        this.cardSelected.push(card)
        if(this.cardSelected.length === 2) {
            console.log("Duas cartas foram selecionadas.")
            // chegar se os pares são iguais ou diferentes
            this.checkPair()
        }
    }
    // chegar se as cartas selecionadas são iguais
    checkPair() {
        if(this.cardSelected[0] === this.cardSelected[1]) {
            console.log("As cartas são iguais :)") 
        } else {
            console.log("As cartas são diferentes :(")
        }
    }

    renderDeck() {
        // embaralhamento das cartas -> retorna o mesmo array, porém embaralhado
        let sortDeck = this.deck.sort(() => {
            return Math.random() - 0.5
        })

        let boardGame = document.getElementById("board")    // board é o id da section onde as imagens serão dispostas

        sortDeck.forEach((img) => {
            let frontImg = document.createElement("img")
            frontImg.src = img
            frontImg.classList.add("hide") // adiciona a classe hide na lista de classes
            frontImg.classList.add("frontCard")

            let backImg = document.createElement("img")
            backImg.src = "../img/fe.svg"
            backImg.classList.add("show")
            backImg.classList.add("backCard")

            // dispõe a imagem da frente e logo após a imagem do verso
            // isso é importante na utilização do método .previusElementSibling
            boardGame.appendChild(frontImg)
            boardGame.appendChild(backImg)
        })
    }
}