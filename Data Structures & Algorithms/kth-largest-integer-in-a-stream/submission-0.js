class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.values = [];

        for (let num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        this.values.push(val);
        this.bubbleUp();

        if (this.values.length > this.k) this.extractMin();

        return this.values[0];
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if (element >= parent) break;

            this.values[idx] = parent;
            idx = parentIdx;
        }

        this.values[idx] = element;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while (true) {
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftChildIdx < length) {
                if (this.values[leftChildIdx] < element) {
                    swapIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < length) {
                if (
                    (swapIdx === null && this.values[rightChildIdx] < element) ||
                    (swapIdx !== null && this.values[rightChildIdx] < this.values[leftChildIdx])
                )
                    swapIdx = rightChildIdx;
            }

            if (swapIdx === null) break;
            this.values[idx] = this.values[swapIdx];
            this.values[swapIdx] = element;
            idx = swapIdx;
        }
    }

    extractMin() {
        if (this.values.length === 0) return;
        const min = this.values[0];
        const end = this.values.pop();

        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    printElements() {
        return console.log(this.values);
    }
}
