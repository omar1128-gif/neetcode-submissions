class Solution {
    /**
     * @param {string[]} details
     * @return {number}
     */
    countSeniors(details) {
        let ageAbove60 = 0;
        for (const info of details) {
            const proccessedInfo = this.proccessInfo(info);
            if (proccessedInfo.age > 60) ageAbove60++;
        }

        return ageAbove60;
    }

    proccessInfo(info) {
        let phoneNumber = "",
            gender,
            age = "",
            seatAllowed = "";
        for (let i = 0; i < info.length; i++) {
            if (i <= 9) phoneNumber += info[i];
            else if (i === 10) gender = info[i];
            else if (i > 10 && i < 13) age += info[i];
            else seatAllowed += info[i];
        }
        return {
            phoneNumber,
            gender,
            age: +age,
            seatAllowed,
        };
    }
}
