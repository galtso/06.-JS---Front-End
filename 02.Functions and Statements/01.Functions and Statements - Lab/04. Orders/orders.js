function totalPrice(product, quantity) {
    return product === "coffee" ? console.log((quantity * 1.5).toFixed(2))
    : product === "water" ? console.log((quantity * 1).toFixed(2))
    : product === "coke" ? console.log((quantity * 1.4).toFixed(2))
    : product === "snacks" ? console.log((quantity * 2).toFixed(2))
    : console.log("No such product!")    
}

totalPrice("water", 5)