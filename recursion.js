/* eslint-disable indent */

// DRILL NUMBER 1
function sheep(num) {
    if (num === 0) {
        return console.log('All sheep jumped over the fence');
    }

    console.log(`${num}: Another sheep jumps over the fence`);
    sheep(num-1);
}

// DRILL NUMBER 2

function powerCalculator(baseInt, expInt) {
    if (expInt === 0) {
        return 1;
    }
    if (expInt < 0) {
        return "exponent should be >= 0"
    }

    let result = baseInt;
    return result * powerCalculator(baseInt, expInt-1);
}



