function solve(number){
    if((number % 4 == 0 && number % 100 != 0) || (number % 400 == 0)){
        console.log("yes");
    }else{
        console.log("no");
    }
}
solve(1984);
solve(2003);
solve(4);
solve(2000);