class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let left = 0;
        let right = matrix.length - 1;

        let targetRowIndex = null;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            const row = matrix[mid];

            if (target >= row[0] && target <= row[row.length - 1]) {
                targetRowIndex = mid;
                break;
            } else if (target < row[0]) right = mid - 1;
            else {
                left = mid + 1;
            }
        }

        if (targetRowIndex === null) return false;

        const targetRow = matrix[targetRowIndex];
        left = 0;
        right = targetRow.length - 1;

        while (left <= right) {
            let mid = Math.floor(left + (right - left) / 2);
            if (targetRow[mid] === target) return true;
            else if (targetRow[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return false;
    }
}
