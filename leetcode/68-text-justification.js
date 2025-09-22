/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    let parts = [];
    let lines = [];
    let len = 0;
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if (len + (parts.length - 1) + word.length >= maxWidth) {
            // create line
            const gaps = [...Array(Math.max(1, parts.length - 1))].map(() => '');
            let pad = maxWidth - len;
            // console.log("maxWidth=", maxWidth);
            // console.log("len=", len);
            // console.log("gaps.length=", gaps.length);
            // console.log("pad=", pad);
            let i = 0;
            while (pad > 0) {
                gaps[i++ % gaps.length] += ' ';
                pad--;
            }
            gaps.push('');
            // console.log(parts);
            // console.log(gaps);
            let line = '';
            for (let j = 0 ; j < parts.length; j++) {
                line += parts[j] + gaps[j];
            }
            lines.push(line);
            len = 0;
            parts = [];
        }
        len += word.length;
        parts.push(word);
    }
    if (parts.length) {
        let line = parts.join(' ');
        lines.push(line + ' '.repeat(maxWidth - line.length));
    }
    return lines;
};
