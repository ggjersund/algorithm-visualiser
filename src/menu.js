export const PROBLEMS_AND_ALGORITHMS = [
  {
    type: 'Sorting',
    desc: 'Sort arrays into decreasing/increasing order.',
    view: null,
    toolbar: null,
    size: true,
    algorithms: [
      { name: 'Insertion-sort', func: null, },
      { name: 'Merge-sort', func: null, },
      { name: 'Heap-sort', func: null, },
      { name: 'Quick-sort', func: null, },
      { name: 'Bubble-sort', func: null, },
    ]
  },
  {
    type: 'Pathfinding',
    desc: 'Find the shortest or longest path between two points.',
    view: null,
    toolbar: null,
    size: true,
    algorithms: []
  },
  {
    type: 'Constrained optimisation',
    desc: 'Find local minimum or maximums for constrained optimisation problems.',
    view: null,
    toolbar: null,
    size: false,
    algorithms: [
      { name: 'Penalty method', func: null, },
      { name: 'Linear programming', func: null, },
      { name: 'Least squares', func: null, },
    ]
  },
  {
    type: 'Unconstrained optimisation',
    desc: 'Find local minimum or maximums for free optimisation problems.',
    view: null,
    toolbar: null,
    size: false,
    algorithms: [
      { name: 'Steepest descent', func: null, },
      { name: 'Conjugate gradient', func: null, },
      { name: 'BFGS', func: null, },
    ]
  },
];
