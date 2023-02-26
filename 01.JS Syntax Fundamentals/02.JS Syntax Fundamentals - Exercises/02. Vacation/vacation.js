function solve(numberOfPpl, typeOfGroup, dayOfWeek) {
    let totalPrice = 0;
    function calculatePrice(dayOfWeek, numberOfPpl, frPrice, satPrice, sunPrice) {
        if (dayOfWeek === "Friday") {
            return (numberOfPpl * frPrice);
        } else if (dayOfWeek === "Saturday") {
            return (numberOfPpl * satPrice);
        } else {
            return (numberOfPpl * sunPrice);
        }
    }
    if (typeOfGroup === "Students") {
        totalPrice = calculatePrice(dayOfWeek, numberOfPpl, 8.45, 9.8, 10.46);
        if (numberOfPpl >= 30) {
            totalPrice *= 0.85;
        }
    } else if (typeOfGroup === "Business") {
        if (numberOfPpl >= 100) {
            totalPrice = calculatePrice(dayOfWeek, numberOfPpl - 10, 10.9, 15.6, 16);
        } else {
            totalPrice = calculatePrice(dayOfWeek, numberOfPpl, 10.9, 15.6, 16);
        }
    } else {
        totalPrice = calculatePrice(dayOfWeek, numberOfPpl, 15, 20, 22.5);
        if (numberOfPpl >= 10 && numberOfPpl <= 20) {
            totalPrice *= 0.95;
        }
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

solve(30,
    "Students",
    "Sunday"
    );

solve(40,
    "Regular",
    "Saturday"
    );