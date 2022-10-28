class MemoryGame {
    constructor() {
        this.userName = "";
        this.points = 10;
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
        if(this.cardSelected[0].src === this.cardSelected[1].src) {
            console.log("As cartas são iguais :)");
            // classe turn identifica as cartas que vão permanecer viradas
            this.cardSelected[0].classList.add("turn");
            this.cardSelected[1].classList.add("turn");
            this.checkStatus();
            this.cardSelected = [];
        } else {
            console.log("As cartas são diferentes :(");
            this.points -= 2;
            setTimeout(()=>{
                this.cardSelected[0].className = "hide frontCard";
                this.cardSelected[1].className = "hide frontCard";
                this.cardSelected[0].nextElementSibling.className = "show backCard";
                this.cardSelected[1].nextElementSibling.className = "show backCard";
                this.checkStatus();
                this.cardSelected = [];

            }, 1000);
        }
        
    }
     checkStatus() {
        // Caso o jogador perca
        if(this.points===0) {
            let frontCard = document.querySelectorAll(".frontCard");
            let backCard = document.querySelectorAll(".backCard");
            frontCard.forEach((frontCard) => {
                frontCard.className = "show";
            });
            backCard.forEach((backCard) => {
                backCard.className = "hide";
            });
            console.log("Você perdeu :(");
        }
        // Caso o jogador ganhe
        const turnCards = document.querySelectorAll(".turn");
        if (turnCards.length === 8) {
            let boardGame = document.getElementById("board");
            let gameScore = document.getElementById("gameScore");
            boardGame.style.display = "none";
            gameScore.style.display = "none";
            alert("Você ganhou :)");
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