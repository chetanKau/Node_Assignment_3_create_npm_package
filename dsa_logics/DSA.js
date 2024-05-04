
const sumOfArr = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    }
    return sum
}

const removeRepeatNumInArr = (arr) => {
    const newArr = []
    for (let i = 0; i < arr.length;) {
        if (newArr.includes(arr[i])) {
            i++
        }
        else {
            newArr.push(arr[i])
            i++;
        }
    }

    return newArr;
}

const largestValueOfArr = (arr) => {
    let maxVal = 0
    let i = 0;
    while (i < arr.length) {
        if (arr[i] > maxVal || arr[i] === maxVal) {
            maxVal = arr[i]
            i++
        }
        else i++;
    }
    return maxVal;

}

const smallestValueOfArr = (arr) => {
    let minVal = 0
    let i = 0;
    while (i < arr.length) {
        if (arr[i] < minVal || arr[i] === minVal) {
            minVal = arr[i]
            i++
        }
        else i++;
    }
    return minVal;
}

const multipicationOfArrValues = (arr) => {
    let val = 1
    let i = 0;
    while (i < arr.length) {
        val = val * arr[i]
        i++
    }
    return val;
}


console.log("function returned value :- ");

module.exports = { sumOfArr, removeRepeatNumInArr, largestValueOfArr, smallestValueOfArr , multipicationOfArrValues}