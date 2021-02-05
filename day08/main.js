class TypingWriter {
    constructor(element, arr, wait=3000){
        this.element = element;
        this.arr = JSON.parse(arr);
        this.wait = wait; // 받아오는 것들

        this.txt = "";
        this.index = 0;
        this.isDeleting = false;
    }

    typing(){
        const current = this.index % this.arr.length;
        if(this.isDeleting){
            this.txt = this.arr[current].substring(0, this.txt.length - 1);
        } else {
            this.txt = this.arr[current].substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = `<span>${this.txt}</span>`

        if(this.txt === this.arr[current] && !this.isDeleting){
            this.isDeleting = true;
        } else if(this.txt === "" && this.isDeleting){
            this.isDeleting = false;
            this.index++;
        }

        setTimeout(() => this.typing(), 300); // class안에서 사용할때는 익명함수 사용
    }
}

function init(){
    const ele = document.querySelector(".type-txt");
    const words = ele.getAttribute("data-words");
    const object = new TypingWriter(ele, words);

    object.typing();
}

init();