// 자료구조
// 배열 0,1,2,3,4
// 스택 [0,1,2,3,4]
// 큐

class Stack {
    constructor(){
        this.store = []
    }

    push(data) {
        this.store.push(data);
    }

    pop(){
        return this.store.pop();
    }

    peek(){
        return this.store[this.store.length - 1];
    }
}


const stack = new Stack();
console.log(stack);

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.pop()
stack.pop()
const stackPeek = stack.peek();
console.log(stack, stackPeek)
