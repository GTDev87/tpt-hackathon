// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'legacy.Merge.0': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [4.849999, 4.27], shape: [2] }
    },
    'legacy.Merge.1': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [-17.885, -0.9408], shape: [2] }
    },
    'legacy.Merge.2': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [2.425, 2.135], shape: [2] }
    },
    'legacy.Merge.3': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, 4.48], shape: [2] }
    },
    'legacy.Merge.4': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, -0.21, -2.45, 4.48], shape: [4] }
    },
    'legacy.Merge.5': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48], shape: [3, 4] }
    },
    'legacy.Merge.6': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, -0.21, 7.3, -0.21, 7.3, -0.21, -2.45, 4.48, -2.45, 4.48, -2.45, 4.48], shape: [6, 2] }
    },
    'legacy.Merge.7': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, -0.21, 7.3, -0.21, 7.3, -0.21, -2.45, 4.48, -2.45, 4.48, -2.45, 4.48], shape: [6, 2] }
    },
    'legacy.Merge.8': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48, 7.3, -0.21, -2.45, 4.48], shape: [3, 4] }
    },
    'legacy.Merge.9': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [-53.654999, 98.112, 1.5435, -2.822401], shape: [2, 2] }
    },
    'legacy.Merge.10': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: {
        data: [-18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258, -18.8258],
        shape: [3, 3]
      }
    },
    'legacy.Merge.11': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: { data: [-1.0, 7.972742, 0.125427, -1.0], shape: [1, 2, 2] }
    },
    'legacy.Merge.12': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: {
        data: [-0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843],
        shape: [1, 3, 3]
      }
    },
    'legacy.Merge.13': {
      weights: [
        { data: [0.1, 0.4, 0.5, 0.1, 1.0, -2.0, 0.0, 0.3, 0.2, 0.1, 3.0, 0.0], shape: [6, 2] },
        { data: [0.5, 0.7], shape: [2] },
        { data: [1.0, 0.0, -0.9, 0.6, -0.7, 0.0, 0.2, 0.4, 0.0, 0.0, -1.0, 2.3], shape: [6, 2] },
        { data: [0.1, -0.2], shape: [2] }
      ],
      input: { data: [0, 0.2, 0.5, -0.1, 1, 2], shape: [6] },
      expected: {
        data: [-0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843, -0.504843],
        shape: [1, 3, 3]
      }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
