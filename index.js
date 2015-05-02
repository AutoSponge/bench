// import module
var Benchmark = require('benchmark');
var strategies = require('./strategies');
var run = require('./suite');
var setup = require('./setup');
var createScenario = require('./createScenario');

[
    ['short path',          setup.obj,  setup.arrayPaths[2],        setup.obj.a.b],
    ['short failed obj',    {},         setup.arrayPaths[2],        undefined],
    ['short failed path',   setup.obj,  setup.failedArrayPaths[2],  undefined],
    ['medium path',         setup.obj,  setup.arrayPaths[7],        setup.obj.a.b.c.d.e.f.g],
    ['medium failed obj',   {},         setup.arrayPaths[7],        undefined],
    ['medium failed path',  setup.obj,  setup.failedArrayPaths[7],  undefined],
    ['long path',           setup.obj,  setup.arrayPaths[20],       setup.obj.a.b.c.d.e.f.g.h.i.j.k.l.m.n.o.p.q.r.s.t],
    ['long failed obj',     {},         setup.arrayPaths[20],       undefined],
    ['long faied path',     setup.obj,  setup.failedArrayPaths[20], undefined]
].map(createScenario(Benchmark, strategies))
    .forEach(run);
