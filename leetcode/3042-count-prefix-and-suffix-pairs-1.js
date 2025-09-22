/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let number = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            const affix = words[i];
            if (words[j].startsWith(affix) && words[j].endsWith(affix)) {
                number++;
            }
        }
    }
    return number;
};
