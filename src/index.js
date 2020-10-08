module.exports = function reverse(n) {
    if (n < 0) {
        n = -n;
    }
    return +([...n.toString()].reverse().join(''));
}

