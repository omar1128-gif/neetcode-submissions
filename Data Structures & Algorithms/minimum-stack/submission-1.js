class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const currentMin = this.stack.length === 0 ? val :
          Math.min(val , this.getMin());
       
        this.stack.push({ val, min: currentMin });
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.stack[this.stack.length - 1].min;
    }
}

const minStack = new MinStack();
minStack.push(1);
minStack.push(2);
minStack.push(0);

console.log(minStack.getMin());
minStack.pop();
console.log(minStack.top());    
console.log(minStack.getMin());
