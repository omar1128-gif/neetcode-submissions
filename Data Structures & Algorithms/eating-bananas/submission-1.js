class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while (left <= right) {
            let speed = Math.floor(left + (right - left) / 2);
            let totalTime = 0;

            for (const pile of piles) {
                totalTime += Math.ceil(pile / speed);
            }

            if (totalTime <= h) {
                result = speed;
                right = speed - 1;
            } else {
                left = speed + 1;
            }
        }
        return result;
    }
}
