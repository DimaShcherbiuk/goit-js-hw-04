function makeArray(firstArray, secondArray, maxLength) {
    let finishArray = [];
    finishArray = firstArray.concat(secondArray);
    let messageArray = [];
    if ((finishArray.length) > maxLength) {
        messageArray = finishArray.slice(0, maxLength);
    } else {
        messageArray = finishArray;
    }
    return messageArray;

}
