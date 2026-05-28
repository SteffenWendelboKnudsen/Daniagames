
class SlideShow {
    constructor(containerclass) {
        this.container = document.querySelector(containerclass);
        this.cards = document.querySelectorAll(`${containerclass} .slideshow-card`);
        this.leftButton = document.querySelector(`${containerclass} .button-left`);
        this.rightButton = document.querySelector(`${containerclass} .button-right`);
        this.currentCard = 0;
        console.log(this.cards)
        console.log(this.leftButton)
        console.log(this.rightButton)
        this.showCard(this.currentCard);
        this.leftButton.addEventListener("click", () => this.previous())
        this.rightButton.addEventListener("click", () => this.next())
    }

    showCard(index) {
        console.log(this.cards)
        this.cards.forEach(card => {
            card.classList.remove("active");
        });

        this.cards[index].classList.add("active");
    }

    next() {

        this.currentCard++;

        if (this.currentCard >= this.cards.length) {
            this.currentCard = 0;
        }

        this.showCard(this.currentCard);
    }

    previous() {

        this.currentCard--;

        if (this.currentCard < 0) {
            this.currentCard = this.cards.length - 1;
        }

        this.showCard(this.currentCard);
    }
}

