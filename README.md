# bench
performance testing

##results
perfget short path x 984,466 ops/sec ±1.72% (82 runs sampled)
naive short path x 902,912 ops/sec ±1.72% (81 runs sampled)
adaptive short path x 1,202,975 ops/sec ±1.58% (81 runs sampled)
recursive short path x 1,199,541 ops/sec ±1.90% (81 runs sampled)
Fastest is adaptive short path,recursive short path

perfget short failed obj x 1,009,485 ops/sec ±1.58% (80 runs sampled)
naive short failed obj x 832,254 ops/sec ±2.88% (82 runs sampled)
adaptive short failed obj x 1,404,209 ops/sec ±1.23% (96 runs sampled)
recursive short failed obj x 1,421,046 ops/sec ±1.33% (91 runs sampled)
Fastest is recursive short failed obj

perfget short failed path x 1,386,074 ops/sec ±1.06% (98 runs sampled)
naive short failed path x 1,022,291 ops/sec ±1.34% (94 runs sampled)
adaptive short failed path x 1,417,316 ops/sec ±1.13% (96 runs sampled)
recursive short failed path x 1,412,490 ops/sec ±1.17% (99 runs sampled)
Fastest is adaptive short failed path,recursive short failed path

perfget medium path x 1,214,904 ops/sec ±1.33% (92 runs sampled)
naive medium path x 645,914 ops/sec ±1.06% (98 runs sampled)
adaptive medium path x 1,052,216 ops/sec ±1.65% (92 runs sampled)
recursive medium path x 1,012,949 ops/sec ±1.11% (92 runs sampled)
Fastest is perfget medium path

perfget medium failed obj x 1,323,233 ops/sec ±1.60% (90 runs sampled)
naive medium failed obj x 683,341 ops/sec ±1.11% (98 runs sampled)
adaptive medium failed obj x 1,469,964 ops/sec ±1.39% (94 runs sampled)
recursive medium failed obj x 1,432,149 ops/sec ±1.66% (98 runs sampled)
Fastest is adaptive medium failed obj

perfget medium failed path x 1,114,378 ops/sec ±1.12% (96 runs sampled)
naive medium failed path x 587,131 ops/sec ±1.30% (93 runs sampled)
adaptive medium failed path x 1,077,826 ops/sec ±1.28% (93 runs sampled)
recursive medium failed path x 1,043,800 ops/sec ±1.29% (95 runs sampled)
Fastest is perfget medium failed path

perfget long path x 1,006,423 ops/sec ±1.15% (97 runs sampled)
naive long path x 290,183 ops/sec ±1.51% (94 runs sampled)
adaptive long path x 584,936 ops/sec ±1.15% (94 runs sampled)
recursive long path x 513,629 ops/sec ±1.43% (96 runs sampled)
Fastest is perfget long path

perfget long failed obj x 1,204,747 ops/sec ±1.14% (96 runs sampled)
naive long failed obj x 384,866 ops/sec ±1.04% (97 runs sampled)
adaptive long failed obj x 1,337,860 ops/sec ±1.16% (94 runs sampled)
recursive long failed obj x 1,371,160 ops/sec ±1.08% (97 runs sampled)
Fastest is recursive long failed obj

perfget long faied path x 995,206 ops/sec ±1.31% (96 runs sampled)
naive long faied path x 323,502 ops/sec ±0.96% (99 runs sampled)
adaptive long faied path x 821,176 ops/sec ±1.19% (92 runs sampled)
recursive long faied path x 738,030 ops/sec ±1.34% (92 runs sampled)
Fastest is perfget long faied path