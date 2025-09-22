/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    while (true) {
        let cpath = path;

        // double forward slash
        cpath = cpath.replace(/\/\//, '/');
        // single period on root
        cpath = cpath.replace(/^\/\.(\/|$)/, '/');
        // single period directory
        cpath = cpath.replace(/\/\.(\/|$)/, '/');
        // double period on root
        cpath = cpath.replace(/^\/\.\.(\/|$)/, '/');
        // double period directory
        cpath = cpath.replace(/\/((?!\.\.\/|\.\/)[^\/]+?\/)\.\.(\/|$)/, '/');
        // trailing slash
        cpath = cpath.replace(/(.+)\/$/, '$1');
        //console.log(cpath);

        if (cpath == path) {
            break;
        }
        path = cpath;
    }
    return path;
};
