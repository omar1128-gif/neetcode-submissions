class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        let digitInt = BigInt(digits.join("")) + 1n;
        return Array.from(String(digitInt), Number);
    }
}
