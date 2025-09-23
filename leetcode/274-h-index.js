/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let h = 0;
    citations.sort((a,b) => b - a);
    for (let i = 0; i < citations.length; i++) {
        const c = citations[i];
        if (c > h) {
            h++;
        }
    }
    return h;
};
