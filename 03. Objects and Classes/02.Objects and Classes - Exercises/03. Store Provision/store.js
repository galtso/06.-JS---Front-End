function solve(stock, products) {
let combined = [...stock, ...products];
let productObj = {};
for (let index = 0; index < combined.length; index+=2) {
    let name = combined[index];
    let quantity = Number(combined[index + 1]);
    if (productObj.hasOwnProperty(name)){
        productObj[name] += quantity;
    }else{
        productObj[name] = quantity;
    }
}
for (const key in productObj) {
    console.log(`${key} -> ${productObj[key]}`)
}
}

solve([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )