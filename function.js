function faa(x = 0) {
    return x + 1
}

console.log(faa(1));

(function (x = 0) {
    console.log(x + 1)
})()

const foo = (x = 0) => {
    return x + 1
}

console.log(foo(2));

// inner function
function addSquares(a, b) {
    function square(x) {
        return x * x;
    }

    return square(a) + square(b);
}

console.log(addSquares(1, 2)); //5

// recursive function
function loop(x) {
    if (x >= 10) return;
    console.log(x);
    loop(x + 1);
}

loop(1);