function f(num) {
    if (num <= 1) {
        return 1;
    }
    return num * f(num - 1);
}

console.log(f(5));