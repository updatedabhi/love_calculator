function findLove() {
    var randoNumber = Math.random();
    var lovePercentage = Math.floor(randoNumber * 100) + 1;
    if (lovePercentage <= 50) {
        document.querySelector(".result").innerText = "Result: " + lovePercentage + "%" + " (Not strong relation)";
    }
    else {
        document.querySelector(".result").innerText = "Result: " + lovePercentage + "%" + " (Strong relation)";
    }
}