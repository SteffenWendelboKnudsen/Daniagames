
class SlideShow {
    constructor(containerclass) {
        this.container = document.querySelector(containerclass);
        this.items = document.querySelectorAll(`${containerclass} .slideshow-item`);
        this.leftButton = document.querySelector(`${containerclass} .button-left`);
        this.rightButton = document.querySelector(`${containerclass} .button-right`);
        this.currentItem = 0;

        this.showItem(this.currentItem);
        this.leftButton.addEventListener("click", () => this.previous())
        this.rightButton.addEventListener("click", () => this.next())
    }

    showItem(index) {

        this.items.forEach(item => {
            item.classList.remove("active");
        });

        this.items[index].classList.add("active");
    }

    next() {

        this.currentItem++;

        if (this.currentItem >= this.items.length) {
            this.currentItem = 0;
        }

        this.showItem(this.currentItem);
    }

    previous() {

        this.currentItem--;

        if (this.currentItem < 0) {
            this.currentItem = this.items.length - 1;
        }

        this.showItem(this.currentItem);
    }
}

