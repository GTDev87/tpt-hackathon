// TEST DATA
// Keyed by mocha test ID
// Python code for generating test data can be found in the matching jupyter notebook in folder `notebooks/`.

;(function() {
  var DATA = {
    'pooling.GlobalMaxPooling1D.0': {
      input: {
        shape: [6, 6],
        data: [
          -0.806777,
          -0.564841,
          -0.481331,
          0.559626,
          0.274958,
          -0.659222,
          -0.178541,
          0.689453,
          -0.028873,
          0.053859,
          -0.446394,
          -0.53406,
          0.776897,
          -0.700858,
          -0.802179,
          -0.616515,
          0.718677,
          0.303042,
          -0.080606,
          -0.850593,
          -0.795971,
          0.860487,
          -0.90685,
          0.89858,
          0.617251,
          0.334305,
          -0.351137,
          -0.642574,
          0.108974,
          -0.993964,
          0.051085,
          -0.372012,
          0.843766,
          0.088025,
          -0.598662,
          0.789035
        ]
      },
      expected: { shape: [6], data: [0.776897, 0.689453, 0.843766, 0.860487, 0.718677, 0.89858] }
    },
    'pooling.GlobalMaxPooling1D.1': {
      input: {
        shape: [3, 7],
        data: [
          0.601872,
          -0.028379,
          0.654213,
          0.217731,
          -0.864161,
          0.422013,
          0.888312,
          -0.714141,
          -0.184753,
          0.224845,
          -0.221123,
          -0.847943,
          -0.511334,
          -0.871723,
          -0.597589,
          -0.889034,
          -0.544887,
          -0.004798,
          0.406639,
          -0.35285,
          0.648562
        ]
      },
      expected: { shape: [7], data: [0.601872, -0.028379, 0.654213, 0.217731, 0.406639, 0.422013, 0.888312] }
    },
    'pooling.GlobalMaxPooling1D.2': {
      input: {
        shape: [8, 4],
        data: [
          -0.215694,
          0.441215,
          0.116911,
          0.53299,
          0.883562,
          -0.535525,
          -0.869764,
          -0.596287,
          0.576428,
          -0.689083,
          -0.132924,
          -0.129935,
          -0.17672,
          -0.29097,
          0.590914,
          0.992098,
          0.908965,
          -0.170202,
          0.640203,
          0.178644,
          0.866749,
          -0.545566,
          -0.827072,
          0.420342,
          -0.076191,
          0.207686,
          -0.908472,
          -0.795307,
          -0.948319,
          0.683682,
          -0.563278,
          -0.82135
        ]
      },
      expected: { shape: [4], data: [0.908965, 0.683682, 0.640203, 0.992098] }
    }
  }

  window.TEST_DATA = Object.assign({}, window.TEST_DATA, DATA)
})()
