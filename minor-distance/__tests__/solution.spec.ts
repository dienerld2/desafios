import { minorDistance } from '../_solution';

describe('minorDistance', () => {
  it('should return Array 2D - 2 steps', () => {
    const input = [1, 6, 8, 3, 434, 645, 10, 14, 18, 643, 20];
    const result = minorDistance(input);

    expect(result).toEqual([
      [1, 3],
      [6, 8],
      [8, 10],
      [18, 20],
      [643, 645]
    ]);
  });

  it('should return Array 2D - 1 step', () => {
    const input = [1, 6, 8, 3, 434, 645, 10, 14, 18, 643, 20, 21];
    const result = minorDistance(input);

    expect(result).toEqual([[20, 21]]);
  });

  it('should return Array 2D - 1000 entries', () => {
    const result = minorDistance(inputHundred);

    expect(result).toEqual(responseHundred);
  });
});

const responseHundred = [
  [104, 105], [329, 330], [426, 427], [469, 470],
  [583, 584], [627, 628], [693, 694], [1027, 1028],
  [1327, 1328], [1396, 1397], [1505, 1506], [1635, 1636],
  [1700, 1701], [1956, 1957], [2023, 2024], [2173, 2174],
  [2194, 2195], [2605, 2606], [2632, 2633], [2760, 2761],
  [2811, 2812], [2812, 2813], [2896, 2897], [3184, 3185],
  [3190, 3191], [3256, 3257], [3294, 3295], [3407, 3408],
  [3536, 3537], [3837, 3838], [3993, 3994], [4100, 4101],
  [4172, 4173], [4223, 4224], [4348, 4349], [4383, 4384],
  [4468, 4469], [4567, 4568], [4573, 4574], [4630, 4631],
  [4878, 4879], [4883, 4884], [4884, 4885], [4993, 4994],
  [5030, 5031], [5031, 5032], [5156, 5157], [5376, 5377],
  [5387, 5388], [5390, 5391], [5391, 5392], [5428, 5429],
  [5479, 5480], [5480, 5481], [5701, 5702], [5782, 5783],
  [5876, 5877], [5877, 5878], [5907, 5908], [5935, 5936],
  [5978, 5979], [6118, 6119], [6210, 6211], [6330, 6331],
  [6339, 6340], [6344, 6345], [6569, 6570], [6615, 6616],
  [6719, 6720], [6720, 6721], [6721, 6722], [6722, 6723],
  [6735, 6736], [6736, 6737], [6873, 6874], [6902, 6903],
  [7128, 7129], [7311, 7312], [7648, 7649], [7900, 7901],
  [7901, 7902], [8057, 8058], [8194, 8195], [8382, 8383],
  [8490, 8491], [8833, 8834], [8834, 8835], [9105, 9106],
  [9141, 9142], [9194, 9195], [9237, 9238], [9238, 9239],
  [9244, 9245], [9295, 9296], [9426, 9427], [9585, 9586],
  [9593, 9594], [9617, 9618], [9618, 9619], [9623, 9624],
  [9624, 9625], [9627, 9628], [9654, 9655], [9698, 9699],
  [9747, 9748], [9960, 9961]

];

const inputHundred = [
  4482, 1963, 6261, 330, 8004, 9390, 6813, 5608, 3832, 6940, 8146, 5387, 6121,
  9427, 7615, 1094, 111, 786, 6018, 745, 9149, 4441, 3191, 2553, 8763, 4101,
  7536, 7128, 858, 1782, 3632, 4452, 6340, 5504, 9819, 7611, 2632, 5536, 9503,
  1520, 7311, 9378, 7592, 6723, 6569, 583, 6722, 7901, 448, 8524, 4383, 4488,
  1845, 9930, 3140, 6720, 897, 6218, 1397, 2984, 3156, 7641, 4223, 6311, 2005,
  4005, 3145, 8474, 2246, 5391, 9981, 105, 4790, 1284, 9748, 6339, 8789, 8491,
  775, 9198, 5796, 1506, 3215, 6591, 7405, 2761, 5501, 5876, 3152, 5429, 9131,
  9211, 4165, 7782, 218, 9654, 8213, 6006, 9225, 4580, 8877, 298, 2924, 3312,
  1953, 7396, 2123, 3257, 1197, 7938, 1556, 890, 1364, 4729, 2817, 8099, 5921,
  7825, 9747, 1961, 7755, 944, 4015, 1635, 2207, 3434, 7226, 8273, 2195, 7400,
  8855, 7133, 8354, 7262, 7363, 5330, 5591, 5161, 258, 5163, 6753, 3601, 3733,
  8048, 4884, 7288, 3705, 3407, 9141, 6560, 3479, 6858, 4574, 2086, 1543, 1173,
  4513, 5394, 7869, 5930, 1791, 2790, 4867, 4455, 1008, 7902, 7572, 9244, 4377,
  7367, 9316, 5481, 383, 6324, 5031, 2447, 3537, 810, 4216, 2194, 4353, 4408,
  521, 9070, 4630, 8461, 9195, 9586, 6903, 5305, 5479, 9054, 4854, 3523, 1277,
  7565, 8276, 9867, 6062, 7552, 4503, 8781, 9639, 8914, 9194, 4068, 7622, 9590,
  5955, 3210, 9688, 48, 8195, 3585, 9810, 784, 3661, 5380, 6552, 1950, 1236,
  4897, 9364, 1678, 9617, 6409, 8967, 1215, 5808, 3760, 4994, 6687, 4556, 59,
  4172, 443, 450, 171, 4375, 4777, 8450, 5774, 3190, 765, 7351, 917, 2400, 4879,
  9593, 2813, 7296, 5820, 5376, 5477, 1705, 8069, 1617, 601, 3619, 9106, 8673,
  9813, 951, 1885, 7779, 5037, 9919, 5019, 6999, 5633, 84, 9698, 5673, 1644,
  2575, 4141, 4305, 9948, 1005, 2357, 5388, 6211, 7435, 7235, 4290, 7283, 7663,
  9025, 2812, 1325, 3427, 7648, 7117, 2199, 1443, 9859, 9759, 9261, 104, 2868,
  7307, 2244, 3873, 7718, 4750, 1435, 1505, 7911, 9549, 6485, 5895, 5396, 2204,
  610, 1529, 8706, 4883, 7498, 8201, 4214, 3268, 3536, 9710, 8194, 5050, 4485,
  2582, 6744, 3088, 8521, 1753, 641, 8640, 3035, 4425, 4276, 1380, 4400, 5156,
  5377, 6089, 2746, 3555, 2023, 8135, 6482, 8483, 8834, 9278, 3916, 2760, 5280,
  9180, 2633, 4468, 7875, 6914, 1320, 6331, 9142, 3914, 2770, 3725, 4224, 8061,
  584, 7830, 8363, 3671, 3372, 6721, 3307, 422, 8679, 2843, 5933, 273, 3132,
  9169, 5855, 9725, 628, 8532, 8159, 372, 7182, 9435, 5841, 5783, 5663, 1447,
  4631, 9486, 1484, 9851, 855, 5392, 4973, 6532, 7676, 4429, 5320, 799, 3948,
  2174, 3628, 6846, 1956, 307, 3150, 365, 7512, 280, 5828, 8235, 260, 7732,
  3184, 4547, 9245, 4588, 5621, 8112, 6975, 1461, 9489, 6369, 3837, 9280, 495,
  9627, 7010, 2413, 8129, 9155, 5030, 486, 3642, 4586, 310, 9066, 4636, 4519,
  8161, 3674, 6193, 1848, 5428, 6400, 9960, 2564, 2360, 9272, 9655, 7931, 2081,
  7460, 4469, 7464, 6821, 779, 8190, 2605, 6582, 5702, 5657, 6119, 2606, 3421,
  5195, 6673, 9127, 411, 3768, 1730, 1458, 8490, 7338, 9961, 1549, 6430, 804,
  5858, 7866, 9619, 5403, 5296, 4083, 4707, 4336, 79, 654, 4364, 7034, 685, 593,
  6123, 904, 1607, 3497, 1684, 2664, 5907, 523, 3979, 2579, 5299, 8907, 6166,
  7924, 7881, 6336, 3910, 3198, 6056, 9166, 469, 8418, 3294, 6199, 3108, 5720,
  9941, 1176, 3045, 9568, 4794, 1941, 3002, 6255, 6544, 6386, 8408, 9237, 2332,
  3185, 4162, 1438, 391, 329, 2708, 6491, 8141, 5597, 4355, 9618, 3807, 6740,
  7476, 9031, 4100, 7312, 8671, 9282, 8383, 6906, 3981, 435, 8623, 6902, 3592,
  813, 5336, 8794, 6428, 8897, 9295, 6015, 9872, 1585, 5480, 510, 6345, 8787,
  8330, 3068, 3552, 8121, 8665, 3452, 1178, 3256, 694, 7794, 246, 1724, 8309,
  3542, 2722, 313, 930, 4241, 9455, 7445, 3459, 6092, 5451, 1396, 6300, 5277,
  9625, 2896, 2011, 8458, 7249, 2477, 2897, 3194, 9585, 8576, 9472, 8424, 6344,
  9105, 5737, 6118, 8495, 6639, 5171, 3973, 1306, 6244, 8382, 6455, 989, 6731,
  2202, 5877, 900, 4319, 4699, 8334, 8292, 665, 867, 4173, 5548, 9945, 4105,
  987, 9461, 6719, 1802, 7442, 5935, 7822, 560, 4885, 4434, 3023, 7252, 6178,
  2935, 9075, 8835, 7458, 5087, 8040, 134, 5801, 1272, 2428, 6414, 5913, 2063,
  5695, 6737, 5116, 2548, 816, 6420, 145, 2065, 4384, 6979, 7032, 9288, 5902,
  5990, 9506, 4688, 1452, 3461, 2980, 5946, 3066, 9817, 4458, 3097, 9205, 6026,
  4259, 7013, 5346, 4087, 427, 2905, 5981, 4322, 8183, 9604, 5699, 8374, 4568,
  9426, 4490, 8798, 8530, 7129, 4545, 9879, 7701, 1351, 3876, 1804, 711, 8433,
  1511, 8352, 8692, 758, 5757, 3993, 3084, 6791, 8320, 6874, 8286, 5292, 7917,
  8887, 6651, 6996, 2024, 205, 2100, 5729, 2942, 550, 3596, 693, 3857, 2556,
  908, 9432, 5561, 512, 7765, 3928, 7690, 627, 7188, 1309, 2140, 3415, 2228,
  3470, 9296, 9327, 5936, 6873, 4878, 5524, 1971, 347, 4714, 3118, 7950, 940,
  6294, 5862, 5979, 9802, 5328, 9779, 7017, 1327, 1058, 1827, 7560, 1710, 9230,
  9594, 8748, 1582, 8760, 2662, 1498, 2523, 8405, 2384, 6854, 5442, 4349, 9793,
  4393, 4573, 912, 1764, 3408, 3095, 1246, 647, 6515, 1707, 5652, 7086, 567,
  9623, 5339, 9004, 2395, 7365, 7211, 9641, 7102, 9650, 6417, 6570, 7900, 36,
  3503, 4266, 426, 8058, 2431, 8783, 3828, 9624, 1228, 8057, 3295, 5180, 57,
  1700, 7893, 5878, 8657, 5112, 8924, 5978, 2505, 2129, 7303, 7043, 5908, 4177,
  794, 7649, 4389, 1316, 1328, 6210, 508, 6407, 633, 4796, 4993, 3120, 4001,
  2495, 5032, 3773, 878, 3756, 2740, 6181, 2675, 9238, 3944, 8075, 2310, 2380,
  7206, 7121, 5098, 5701, 9677, 5390, 4017, 591, 8833, 8022, 1027, 9706, 2743,
  8942, 852, 470, 4582, 5667, 3126, 9994, 5199, 3177, 6291, 457, 4966, 6863,
  6736, 3196, 2254, 5206, 4247, 651, 9258, 2155, 9658, 5079, 2456, 418, 1701,
  1636, 1028, 5146, 9133, 881, 8930, 9484, 1516, 4732, 2811, 4922, 5453, 7698,
  8860, 1148, 9188, 8034, 3343, 4494, 320, 8410, 5650, 243, 1957, 6829, 7569,
  9057, 3863, 5948, 9693, 143, 5777, 8827, 3838, 9681, 6306, 9628, 4123, 2234,
  2502, 4287, 8919, 8964, 8558, 9153, 8820, 175, 7357, 2638, 7906, 3212, 6735,
  3994, 6615, 5303, 9239, 2841, 7974, 1471, 6330, 2003, 6616, 7596, 4181, 4697,
  5223, 4348, 3111, 3006, 3918, 9699, 4175, 2173, 3072, 4744, 9399, 4712, 82,
  9304, 4567, 7471, 3954, 5782, 5217, 3287, 1234, 1474, 5157
];
