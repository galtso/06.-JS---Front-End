function solve(numbers){
    numbers
    .forEach((num) => {
        console.log(isPalindrome(num))
    });

    function isPalindrome(num){
        let reversed = Number([...num.toString()].reverse().join(""));
        return num === reversed;
    }
}

solve([123,323,421,121])