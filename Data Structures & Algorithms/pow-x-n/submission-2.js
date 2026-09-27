class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        if (x === 0) return 0;
        if (n === 0) return 1;

        let result = 1.0;
        let power = Math.abs(n);

        while (power > 0) {
            if (power % 2 === 1) {
                result *= x;
            }

            x *= x;
            power = Math.floor(power / 2);
        }
        return n >= 0 ? result : 1 / result;
    }
}
