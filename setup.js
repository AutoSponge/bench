(function (GLOBAL) {

    //setup
    var paths = {};
    var arrayPaths = {};
    var failedArrayPaths = {};
    var obj = (function (start, end) {
        var i, next, obj, path, name, temp;
        next = obj = {};
        path = '';
        for (i = 0; i < (end - start); i += 1) {
            name = String.fromCharCode(i + start);
            next = next[name] = (i % 3 < 2 ? {} : i % 2 === 0 ? [] : function () {
            });
            path += path.length ? '.' + name : name;
            paths[i + 1] = path;
            arrayPaths[i + 1] = path.split('.');
            temp = (path).split('.');
            temp.splice(i >> 1, 1, 'x');
            failedArrayPaths[i + 1] = temp;
        }
        return obj;
    }(97 /* a */, 123 /* z */));

    var setup = {
        paths: paths,
        arrayPaths: arrayPaths,
        failedArrayPaths: failedArrayPaths,
        obj: obj
    };
    if (typeof module === 'undefined') {
        GLOBAL.setup = setup;
    } else {
        module.exports = setup;
    }
}(this));