class Stack {
    constructor(){
        this.store = [];
    }
    push(data){
        this.store.push(data);
    }
    pop(){
        return this.store.pop();
    }
    peek(){
        return this.store[this.store.length - 1];
    }
}

const stack = new Stack()
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
const stackpeek  = stack.peek();
console.log(stack, stackpeek);
