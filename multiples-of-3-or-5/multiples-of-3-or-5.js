const solution = (number) => {
    let sum = 0;
    for (let i = 1; i < number; i += 1) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;
        }
    }
    return sum;
};

console.log(solution(10)); // 23
console.log(solution(19)); // 78
