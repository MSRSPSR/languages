# Recursion

The first step in dynamic programming solutions is recursion. Backtracking
algorithms are similarly built using recursive calls. Merge-sort, quick-sort,
tree-traversals (tree problems: pre-order and post-order are inherently
recursive), divide and conquer.

Recursive approaches are broken down into smaller problems until we reach a
base case, after which the function call stack begins to unwind and resumes
execution.

# Projects

Factorial of a number:

Benchmark 1: ./factorial
  Time (mean ± σ):       0.4 ms ±   1.0 ms    [User: 0.2 ms, System: 0.3 ms]
  Range (min … max):     0.0 ms …   9.1 ms    1125 runs
Benchmark 2: ./tail_factorial
  Time (mean ± σ):       0.3 ms ±   0.8 ms    [User: 0.3 ms, System: 0.4 ms]
  Range (min … max):     0.0 ms …   6.5 ms    1125 runs
Summary
  './tail_factorial' ran
    1.23 ± 4.59 times faster than './factorial'
