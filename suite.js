(function (GLOBAL) {

    function run(spec) {
        Object.keys(spec.strategies).reduce(function (suite, strategy) {
            return suite.add(strategy + ' ' + spec.msg, function () {
                console.assert(spec.strategies[strategy](spec.obj, spec.path) === spec.result);
            })
        }, spec.suite)

            // add listeners
            .on('cycle', function (event) {
                console.log(String(event.target));
            })
            .on('complete', function () {
                console.log('Fastest is ' + this.filter('fastest').pluck('name'));
            })

            // run async
            .run({'async': false});
    }

    if (typeof module === 'undefined') {
        GLOBAL.run = run;
    } else {
        module.exports = run;
    }

}(this));
