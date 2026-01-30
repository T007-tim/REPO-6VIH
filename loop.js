class LoopOptimization {
    static calculateSum(numbers) {
        let sum = 0;
        for (const num of numbers) { // enhanced for-loop (cleaner & faster)
            sum += num;
        }
        return sum;
    }
}
