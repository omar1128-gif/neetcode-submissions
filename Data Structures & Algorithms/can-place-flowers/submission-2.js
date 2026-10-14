class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {
        for (let i = 0; i < flowerbed.length; i++) {
            if (flowerbed[i] === 0) {
                const emptyLeft = i === 0 || flowerbed[i - 1] === 0;
                const emptyRight = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

                if (emptyLeft && emptyRight) {
                    flowerbed[i] = 1;
                    n--;

                    if (n <= 0) return true;

                    i++;
                }
            }
        }

        return n <= 0;
    }
}
