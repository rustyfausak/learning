function incMap(map, key) {
    if (map.has(key)) {
        map.set(key, map.get(key) + 1);
    }
    else {
        map.set(key, 1);
    }
}

function decMap(map, key) {
    if (map.has(key)) {
        map.set(key, map.get(key) - 1);
    }
    if (map.get(key) <= 0) {
        map.delete(key);
    }
}

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const targetMap = new Map();
    for (let i = 0; i < t.length; i++) {
        incMap(targetMap, t[i]);
    }
    //console.log("targetMap:", targetMap);

    const windowMap = new Map();
    let windowSize = 0;
    let minStr = "";
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        
        if (windowSize) {
            incMap(windowMap, char);
            windowSize++;
        }
        else {
            if (targetMap.has(char)) {
                incMap(windowMap, char);
                windowSize++;
            }
        }

        //console.log("i=", i, "char=", char, "windowSize=", windowSize, "windowMap:", windowMap);

        if (!windowSize) {
            continue;
        }

        // Handle too many target characters in the window
        if (targetMap.has(char) && windowMap.get(char) > targetMap.get(char)) {
            //console.log("too many of ", char);
            // There are too many of the target characters in the
            // window substring. So we remove characters off the left
            // of the substring until we cant
            let j = i - windowSize + 1;
            while (j < i) {
                if (targetMap.has(s[j])) {
                    if (windowMap.get(s[j]) > targetMap.get(s[j])) {
                        //console.log("  dec", s[j]);
                        decMap(windowMap, s[j]);
                        windowSize--;
                    }
                    else {
                        break;
                    }
                }
                else {
                    //console.log("  dec", s[j]);
                    decMap(windowMap, s[j]);
                    windowSize--;
                }
                j++;
            }
        }

        // Check if the windowMap contains all the target characters
        let valid = true;
        targetMap.forEach((value, key) => {
            if (!windowMap.has(key)) {
                valid = false;
            }
            if (windowMap.get(key) < value) {
                valid = false;
            }
        });

        if (valid) {
            //console.log("valid!");
            if (minStr == "" || windowSize < minStr.length) {
                minStr = s.substring(i - windowSize + 1, i + 1);
                //console.log("new minStr", minStr);
            }
        }
    }

    return minStr;
};
