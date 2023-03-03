function solve(n1, n2, n3){
    function sum(){
        return n1 + n2;
    }
    function subtract(){
        return sum(n1,n2) - n3;
    }
    console.log(subtract(n1, n2, n3));
}
solve(1,
    17,
    30
    
    )