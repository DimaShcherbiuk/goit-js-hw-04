function filterArray(numbers, value) {
    let finishArrayNum = [];
    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            finishArrayNum.push(numbers[i]);
        }
    }
    return finishArrayNum;
}
