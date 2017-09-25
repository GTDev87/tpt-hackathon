// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'embeddings.Embedding.0': {
      expected: {
        data: [
          0.711111,
          -0.843888,
          -0.295,
          0.711111,
          -0.843888,
          -0.295,
          0.711111,
          -0.843888,
          -0.295,
          -0.702738,
          -0.469642,
          -0.024244,
          0.123907,
          0.924736,
          0.347325,
          0.123907,
          0.924736,
          0.347325,
          0.962892,
          -0.00486,
          -0.636172
        ],
        shape: [7, 3]
      },
      input: { data: [1, 1, 1, 2, 0, 0, 3], shape: [7] },
      weights: [
        {
          data: [
            0.123907,
            0.924736,
            0.347325,
            0.711111,
            -0.843888,
            -0.295,
            -0.702738,
            -0.469642,
            -0.024244,
            0.962892,
            -0.00486,
            -0.636172,
            -0.318551,
            0.114577,
            0.674536
          ],
          shape: [5, 3]
        }
      ]
    },
    'embeddings.Embedding.1': {
      expected: {
        data: [
          0.417255,
          0.922794,
          -0.33368,
          0.50358,
          -0.971797,
          0.335228,
          -0.050332,
          0.277192,
          0.254304,
          -0.351008,
          0.171248,
          -0.19617,
          -0.093472,
          -0.148244,
          -0.785821,
          0.417255,
          0.922794,
          -0.33368,
          0.50358,
          -0.971797,
          0.764005,
          -0.881062,
          0.956836,
          0.507665,
          -0.423755,
          0.501686,
          0.997166,
          -0.210946,
          0.606477,
          -0.474869,
          0.531579,
          0.618621,
          -0.66854,
          0.905422,
          0.862149,
          0.713225,
          0.382837,
          -0.566294,
          0.239002,
          0.784362,
          -0.383154,
          0.451816,
          0.335889,
          0.941217,
          0.853643,
          -0.996749,
          -0.556871,
          0.103616,
          -0.929907,
          0.337223
        ],
        shape: [10, 5]
      },
      input: { data: [8, 6, 14, 8, 11, 17, 10, 18, 0, 13], shape: [10] },
      weights: [
        {
          data: [
            -0.383154,
            0.451816,
            0.335889,
            0.941217,
            0.853643,
            -0.668432,
            0.074737,
            -0.716747,
            -0.816627,
            0.866955,
            -0.792696,
            0.164527,
            0.452684,
            0.628771,
            -0.254798,
            -0.612431,
            0.523026,
            -0.591887,
            -0.064898,
            0.053117,
            -0.867557,
            0.504834,
            0.679206,
            -0.556031,
            0.36241,
            0.709619,
            0.433085,
            0.934247,
            0.971585,
            -0.162598,
            0.335228,
            -0.050332,
            0.277192,
            0.254304,
            -0.351008,
            0.564886,
            0.928261,
            -0.292494,
            -0.169661,
            0.444558,
            0.417255,
            0.922794,
            -0.33368,
            0.50358,
            -0.971797,
            -0.328566,
            -0.691183,
            -0.490174,
            0.510752,
            -0.597686,
            0.531579,
            0.618621,
            -0.66854,
            0.905422,
            0.862149,
            0.764005,
            -0.881062,
            0.956836,
            0.507665,
            -0.423755,
            -0.036345,
            -0.009073,
            -0.612606,
            0.135378,
            -0.748721,
            -0.996749,
            -0.556871,
            0.103616,
            -0.929907,
            0.337223,
            0.171248,
            -0.19617,
            -0.093472,
            -0.148244,
            -0.785821,
            0.920643,
            -0.685849,
            -0.962657,
            -0.460922,
            -0.169631,
            -0.516211,
            -0.804437,
            -0.39244,
            0.665189,
            0.635366,
            0.501686,
            0.997166,
            -0.210946,
            0.606477,
            -0.474869,
            0.713225,
            0.382837,
            -0.566294,
            0.239002,
            0.784362,
            -0.693148,
            -0.893049,
            0.509413,
            -0.576682,
            -0.620533
          ],
          shape: [20, 5]
        }
      ]
    },
    'embeddings.Embedding.2': {
      expected: {
        data: [0.387117, 0.162469, -0.321611, 0.19085, -0.097717, -0.695123, -0.717262, -0.557943, -0.232756, 0.493263],
        shape: [5, 2]
      },
      input: { data: [28, 9, 19, 30, 18], shape: [5] },
      weights: [
        {
          data: [
            -0.616375,
            -0.01389,
            0.09463,
            0.74616,
            0.903976,
            0.46756,
            0.810735,
            -0.196574,
            0.312078,
            0.931824,
            -0.658021,
            -0.305244,
            0.16033,
            -0.01051,
            -0.669953,
            -0.377897,
            0.842174,
            -0.54385,
            -0.321611,
            0.19085,
            0.963801,
            0.015549,
            0.436929,
            -0.069782,
            0.088399,
            -0.63811,
            0.250636,
            0.205862,
            0.01425,
            0.436179,
            -0.020659,
            0.844792,
            -0.635104,
            -0.550835,
            0.334066,
            -0.703519,
            -0.232756,
            0.493263,
            -0.097717,
            -0.695123,
            0.712031,
            0.722442,
            -0.432591,
            0.711508,
            0.074558,
            0.216026,
            0.255217,
            0.406698,
            -0.983917,
            -0.519696,
            -0.199758,
            0.134159,
            -0.177873,
            -0.491386,
            0.456317,
            0.961498,
            0.387117,
            0.162469,
            0.907715,
            -0.253443,
            -0.717262,
            -0.557943,
            0.154291,
            0.706519,
            0.53983,
            -0.907997
          ],
          shape: [33, 2]
        }
      ]
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
