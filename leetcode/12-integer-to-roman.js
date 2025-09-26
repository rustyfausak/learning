function romanize(num, val) {
    
    return 
}

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    let roman = '';
    [
        ['M', 1000],
        ['CM', 900],
        ['D', 500],
        ['CD', 400],
        ['C', 100],
        ['XC', 90],
        ['L', 50],
        ['XL', 40],
        ['X', 10],
        ['IX', 9],
        ['V', 5],
        ['IV', 4],
        ['I', 1],
    ].forEach((e) => {
        let y = Math.floor(num / e[1]);
        num = num - y * e[1];
        roman += e[0].repeat(y);
    });
    return roman;
};
