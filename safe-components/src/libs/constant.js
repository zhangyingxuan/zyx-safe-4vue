(function () {
  const constant = {
    jigsawArr: [{name: 0, xStart: 41.6},
      {name: 1, xStart: 64.3}, {name: 2, xStart: 50.6},
      {name: 3, xStart: 72.5}, {name: 4, xStart: 38.7},
      {name: 5, xStart: 54.4}, {name: 6, xStart: 68.1},
      {name: 7, xStart: 53.7}, {name: 8, xStart: 37.5},
      {name: 9, xStart: 57.5}, {name: 10, xStart: 54.3},
      {name: 11, xStart: 58.1}, {name: 12, xStart: 50},
      {name: 13, xStart: 56.2}, {name: 14, xStart: 38.1},
      {name: 15, xStart: 79.3}, {name: 16, xStart: 65.6},
      {name: 17, xStart: 44.4}, {name: 18, xStart: 46.9},
      {name: 19, xStart: 32.5}, {name: 20, xStart: 78.1},
      {name: 21, xStart: 32.5}, {name: 22, xStart: 46.9},
    ],
  }

  // 常量对象
  window.constant = {}
  Object.keys(constant).map(item => {
    window.constant[item] = constant[item]

  })
}())
