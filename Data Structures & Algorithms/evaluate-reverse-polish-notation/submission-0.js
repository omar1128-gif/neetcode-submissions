class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const OPERATIONS = new Map([
            ["+", (a, b) => a + b],
            ["-", (a, b) => a - b],
            ["*", (a, b) => a * b],
            ["/", (a, b) => Math.trunc(a / b)],
        ]);

        for (const token of tokens) {
            if (OPERATIONS.has(token)) {
                const b = stack.pop();
                const a = stack.pop();

                const result = OPERATIONS.get(token)(a, b);

                stack.push(result);
            } else {
                stack.push(Number(token));
            }
        }

        return stack[0];
    }
}

const sol = new Solution();

sol.evalRPN(["1", "2", "+", "3", "*", "4", "-"]);
