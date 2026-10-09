class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ageAbove60 = 0;
        for (const info of details) {
            let age = Number(info.slice(11, 13));

            if (age > 60) ageAbove60++;
        }

        return ageAbove60;
    }
}
