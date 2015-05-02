(function (GLOBAL) {
    var perfget = (function () {
        var depthCache = {};

        function getDepth(depth) {
            var params = '',
                vars = '  var _0 = this',
                body = false,
                h, i;

            if (!depthCache[depth]) {
                for (i = 0; i < depth; i += 1) {
                    params += i ? (', $' + i) : '$' + i;
                    vars += i ? (', _' + i) : '';
                }
                vars += ';\n';
                for (h = i - 1; i > 0; i -= 1, h -= 1) {
                    if (!body) {
                        body = '_' + h + ' === Object(_' + h + ') && ($' + h + ' in _' + h + ') ? _' + h + '[$' + h + ']';
                    } else {
                        body = '(_' + i + ' = _' + h + '[$' + h + '], _' + i + ') && ' + body;
                    }
                }
                body = '  return ' + (!body ? '_0;' : body + ' : void(0);');
                depthCache[depth] = Function(params, vars + body);  // jshint ignore:line
            }
            return depthCache[depth];
        }

        return function (obj, path) {
            var params = path ? path.split ? path.split('.') : path : [];
            return getDepth(params.length).apply(obj, params);
        };
    }());

    var naive = function (obj, path) {
        return path.reduce(function (tree, leaf) {
            return Object(tree) === tree ? tree[leaf] : undefined;
        }, obj);
    };
    var adaptive = function (obj, path) {
        var i, len, current = obj;
        for (i = 0, len = path.length; i < len; i += 1) {
            if (Object(current) === current) {
                current = current[path[i]];
            } else {
                return;
            }
        }
        return current;
    };
    var recursive = function traverse(parent, path, index) {
        var i = index || 0;
        if (Object(parent) === parent) {
            if (i < path.length - 1) {
                return traverse(parent[path[i]], path, i + 1);
            }
            return parent[path[i]];
        }
    };

    var strategies = {
        perfget: perfget,
        naive: naive,
        adaptive: adaptive,
        recursive: recursive
    };

    if (typeof module === 'undefined') {
        GLOBAL.strategies = strategies;
    } else {
        module.exports = strategies;
    }

}(this));
