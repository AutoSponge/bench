(function (GLOBAL) {

    function createScenario(Benchmark, strategies) {
        return function (arr) {
            return {
                suite: new Benchmark.Suite,
                strategies: strategies,
                msg: arr[0],
                obj: arr[1],
                path: arr[2],
                result: arr[3]
            };
        };
    }

    if (typeof module === 'undefined') {
        GLOBAL.createScenario = createScenario;
    } else {
        module.exports = createScenario;
    }
}(this));