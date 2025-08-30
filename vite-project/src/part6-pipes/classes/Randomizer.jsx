export default class Randomizer {
    constructor(seed) {
        this.seed = seed;
        this.prngSeedFunc = this.xmur3(seed);
        this.prngSeed = this.prngSeedFunc();
        this.prng = this.splitmix32(this.prngSeed);
    }

    next() {
        return this.prng();
    }

    // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
    // PRNG that takes a 32-bit integer parameter as the initial state
    splitmix32(a) {
        return function() {
            a |= 0; a = a + 0x9e3779b9 | 0;
            var t = a ^ a >>> 16; t = Math.imul(t, 0x21f0aaad);
                t = t ^ t >>> 15; t = Math.imul(t, 0x735a2d97);
            return ((t = t ^ t >>> 15) >>> 0) / 4294967296;
        };
    }

    // https://github.com/bryc/code/blob/master/jshash/PRNGs.md
    // map a short string to a 32-bit integer to be used as a seed to the PRNG
    xmur3(str) {
        for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
            h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
            h = h << 13 | h >>> 19;
        return function() {
            h = Math.imul(h ^ h >>> 16, 2246822507),
            h = Math.imul(h ^ h >>> 13, 3266489909);
            return (h ^= h >>> 16) >>> 0;
        };
    }
}
