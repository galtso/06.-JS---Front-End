function solve(number){
     let isSame = true;
     let sum = 0;
     while(number > 0){
        let digit = number % 10;
        sum += digit;
        let nextDigit = Math.floor(number / 10) % 10;
        if( digit != nextDigit && nextDigit != 0){
            isSame = false;
        }
        number = Math.floor(number / 10);
     }
     if(isSame){
        console.log("true");
        console.log(sum);
     }else{
        console.log("false");
        console.log(sum);
     }
}

solve(2222222);