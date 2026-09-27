class Solution {
    /**
     * @param {number} x
     * @param {number} n
     * @return {number}
     */
    myPow(x, n) {
        let N = n;

        if (N < 0) {
            N = -N;
            x = 1 / x;
        }

        let result = 1.0;
        let currentProduct = x;

        while (N > 0) {
            if (N % 2 === 1) {
                result *= currentProduct;
            }

            currentProduct *= currentProduct;
            N = Math.floor(N / 2);
        }
        return result;
    }
}
