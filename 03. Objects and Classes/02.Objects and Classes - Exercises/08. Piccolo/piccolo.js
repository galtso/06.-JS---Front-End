function piccolo(input){
let carNumbers = new Set();

for (const line of input) {
    let[command, number] = line.split(', ');
    if(command === 'IN'){
        carNumbers.add(number);
    }else if(command === 'OUT'){
        carNumbers.delete(number);
    }
}

if(carNumbers.length === 0){
    console.log('Parking Lot is Empty')
}else{
    carNumbers = Array.from(carNumbers).sort((a,b) => a.localeCompare(b));
    for (const carNumber of carNumbers) {
        console.log(carNumber)
    }
}
}

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)