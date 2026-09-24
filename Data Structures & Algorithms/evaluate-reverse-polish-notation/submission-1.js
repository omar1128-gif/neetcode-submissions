class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];

            switch (token) {
                case "+": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a + b);
                    break;
                }
                case "-": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a - b);
                    break;
                }
                case "*": {
                    const b = stack.pop();
                    const a = stack.pop();
                    stack.push(a * b);
                    break;
                }
                case "/": {
                    const b = stack.pop();
                    const a = stack.pop();

                    stack.push((a / b) | 0);
                    break;
                }
                default:
                    stack.push(+token);
            }
        }

        return stack[0];
    }
}

const sol = new Solution();

sol.evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
