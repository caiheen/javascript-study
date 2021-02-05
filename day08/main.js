class TypeWriter {
    constructor(element, words, wait=3000){
        this.element = element;
        this.words = JSON.parse(words);
        this.wait = parseInt(wait);
        this.txt = "";
        this.index = 0;
        this.isDeleting = false;
    }

    typing(){
        const current = this.index % this.words.length;
        const fullTxt = this.words[current];

        if(this.isDeleting){
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span>${this.txt}</span>`;

        let speed = 300;

        if(this.isDeleting){
            speed /= 2;
        }

        if(this.txt === fullTxt && !this.isDeleting){
            speed = this.wait;
            this.isDeleting = true;
        } else if(this.txt === "" && this.isDeleting){
            this.isDeleting = false;
            this.index++;
            speed = 500;
        }
        setTimeout(() => this.typing(), speed);
    }
}

class TpyeWriterV2 extends TypeWriter {
    test(){
        console.log("test");
    }
}

function init(){
    const span = document.querySelector(".type-txt");
    const wordArray = span.getAttribute("data-words");
    const time = span.getAttribute("data-wait");

    const tpyingWriter = new TpyeWriterV2(span, wordArray, time);
    console.log(tpyingWriter);
    tpyingWriter.typing();
    tpyingWriter.test();
}

init()