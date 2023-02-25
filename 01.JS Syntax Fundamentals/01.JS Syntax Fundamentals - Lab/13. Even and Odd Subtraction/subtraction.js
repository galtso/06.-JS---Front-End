function subtract(array) {
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < array.length; index++) {
        let currentElement = array[index];
        if (currentElement % 2 ===0) {
            evenSum+=currentElement;
        }else{
            oddSum+=currentElement
        }
    }
    console.log(`${evenSum - oddSum}`);
}

subtract([1,2,3,4,5,6]);
subtract([3,5,7,9]);