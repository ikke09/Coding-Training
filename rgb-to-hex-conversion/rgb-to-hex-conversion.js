const rgb = (r, g, b) => [r, g, b]
    .map((val) => {
        if (val < 0) return '00';
        if (val > 255) return 'FF';
        return Number(val).toString(16).padStart(2, '0');
    })
    .join('')
    .toUpperCase();

console.log(rgb(0, 0, 0), '000000');
console.log(rgb(0, 0, -20), '000000');
console.log(rgb(300, 255, 255), 'FFFFFF');
console.log(rgb(173, 255, 47), 'ADFF2F');
