const moveZeros = (arr) =>
    arr.filter((v => v !== 0))
        .concat(
            Array.from({ length: arr.filter((v => v === 0)).length })
                .fill(0)
        );

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]