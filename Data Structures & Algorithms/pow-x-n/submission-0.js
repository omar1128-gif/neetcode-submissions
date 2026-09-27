class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (x === 0) return 0;
        if (n === 0) return 1;

        if (n < 0) return this.myPow(1 / x, -n);

        if (n % 2 === 0) {
            let half = this.myPow(x, n / 2);
            return half * half;
        }

        return x * this.myPow(x, n - 1);
    }
}
