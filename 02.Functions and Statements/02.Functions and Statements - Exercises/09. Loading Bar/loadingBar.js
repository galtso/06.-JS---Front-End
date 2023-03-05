function solve(number) {
    let currentPosition = Math.floor(number / 10);
    let target = 10;
    if (target === currentPosition) {
      console.log("100% Complete!\n" + "[" + "%".repeat(target) + "]");
    } else {
      console.log(`${number}% [${"%".repeat(currentPosition)}${".".repeat(target - currentPosition)}]\nStill loading...`);
    }
  }

solve(30);