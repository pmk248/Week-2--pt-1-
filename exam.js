function Mission1(arr) {
    let sortedArr = [];
    for (let i = 0; i < arr.length; i ++){
        if (arr[i] % 2 == 0){
            sortedArr.push(arr[i]);
        }
    }
    return sortedArr;
}

function Mission2(str){
    let strArray = str.split(" ");
    let fourLetterWords = 0;
    for (let i = 0; i < strArray.length; i ++){
        if (strArray[i].length == 4) {
            fourLetterWords += 1;
        }
    }
    return fourLetterWords;
}

function Mission3(multiArr){
    sortedArr = [];
    for (let i = 0; i < multiArr.length; i ++){
        for (let j = 0; j < multiArr[i].length; j ++){
            sortedArr.push(multiArr[i][j]);
        }
    };
    return sortedArr;
}

function Mission4(arr) {
    let result = 0;  
    let previous = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > previous) { 
            if (result === 2) {  
                return 0;
            }
            result = 1;
        } else if (arr[i] < previous) { 
            if (result === 1) {  
                return 0;
            }
            result = 2;
        }
        previous = arr[i];
    }

    return result;
}

module.exports = {
    Mission1,
    Mission2,
    Mission3,
    Mission4
};