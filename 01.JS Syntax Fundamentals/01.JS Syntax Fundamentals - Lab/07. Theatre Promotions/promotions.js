function input(day, age) {
    function ticketPrice(age, price1, price2, price3) {
        if (age >= 0 && age <= 18) {
            return (`${price1}$`);
        } else if (age > 18 && age <= 64) {
            return (`${price2}$`)
        } else if (age > 64 && age <= 122) {
            return (`${price3}$`)
        } else {
            return ("Error!")
        }
    }
    if (day === "Weekday") {
        console.log(ticketPrice(age, 12, 18, 12))
    }
    else if (day === "Weekend") {
        console.log(ticketPrice(age, 15, 20, 15))
    }
    if (day === "Holiday") {
        console.log(ticketPrice(age, 5, 12, 10))
    }
}

input('Holiday', -12);
