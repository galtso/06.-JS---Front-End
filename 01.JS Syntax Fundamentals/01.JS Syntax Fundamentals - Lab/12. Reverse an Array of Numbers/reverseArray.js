function reverse(n, innArray) {
    let newArray = innArray.slice(0,n).reverse();
    console.log(`${newArray.join(" ")}`);
}

reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);