const arrayDiff = (a, b) => a.reduce(
    (prev, cur) => prev.concat(!b.includes(cur) ? [cur] : []),
    []);

console.log(arrayDiff([], [4, 5]));
console.log(arrayDiff([3, 4], [3]));
console.log(arrayDiff([1, 8, 2], []));
console.log(arrayDiff([1, 2], [1])); // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // [1,3]
