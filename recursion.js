let sum = 0;
for (let i = 1; i <= 6; i++) {
    sum = sum + i;
}
console.log(sum)
//Output: 21

let sum = 0;
for (let i = 6; i >= 1; i--) {
    sum = sum + i;
}
console.log(sum)


function recursive(i) {
    if (i == 1) {
        return 1;
    }
    return i + recursive(i - 1);
}
console.log(recursive(5))
//Output: 15
