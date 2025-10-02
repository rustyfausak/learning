/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const results = [];
    let len = words[0].length;

    const wordMap = new Map();
    for (let i = 0; i < words.length; i++) {
        if (wordMap.has(words[i])) {
            wordMap.set(words[i], wordMap.get(words[i]) + 1);
        }
        else {
            wordMap.set(words[i], 1);
        }
    }
    // console.log(wordMap);

    for (let offset = 0; offset < len; offset++) {
        let windowSize = 0;
        let windowSeen = new Map();
        //console.log("offset", offset);
        for (let i = offset; i <= s.length - len; i += len) {
            const substr = s.substring(i, i + len);
            //console.log("  ", substr, "(", i, ")");
            if (!wordMap.has(substr)) {
                //console.log("    clear");
                windowSize = 0;
                windowSeen.clear();
                continue;
            }

            windowSize++;
            if (windowSeen.has(substr)) {
                windowSeen.set(substr, windowSeen.get(substr) + 1);
            }
            else {
                windowSeen.set(substr, 1);
            }
            //console.log("    +1");

            while (windowSeen.get(substr) > wordMap.get(substr)) {
                const firstStrInWindow = s.substring(i - (windowSize - 1) * len, i - (windowSize - 2) * len);
                //console.log("too big", firstStrInWindow, i, windowSize);
                const tmp = windowSeen.get(firstStrInWindow);
                if (tmp <= 1) {
                    windowSeen.delete(firstStrInWindow);
                }
                else {
                    windowSeen.set(firstStrInWindow, windowSeen.get(firstStrInWindow) - 1);
                }
                windowSize--;
            }

            if (windowSize == words.length) {
                results.push(i - (windowSize - 1) * len);
            }
        }
    }

    return results;
};
