const adjacencyMatrix = [
  [0, 0, 0, 0, 'y', 0],
  [0, 0, 0, 0, 0, 'y'],
  [0, 0, 0, 0, 0, 'x'],
  [0, 0, 0, 0, 'x', 0],
  [0, 'y', 'x', 0, 0, 0],
  ['y', 0, 0, 'x', 0, 0],
];

const backtraceMapper = {};

const bfs = (adjacencyMatrix, start, search) => {
  const visited = Array(adjacencyMatrix.length).fill(false);

  const qeueue = [];

  qeueue.push(start);

  backtraceMapper[start] = {
    parent: null,
    cameTaking: null,
  };

  visited[start] = true;

  let visiting;
  while (qeueue.length > 0) {
    visiting = qeueue.shift();

    console.log('Current side: ' + (visiting + 1));

    for (let i = 0; i < adjacencyMatrix[visiting].length; i++) {
      const adjecentToVisitingValue = adjacencyMatrix[visiting][i];
      if (adjecentToVisitingValue !== 0 && !visited[i]) {
        qeueue.push(i);

        visited[i] = true;

        backtraceMapper[i] = {
          parent: `${visiting}`,
          cameTaking: adjecentToVisitingValue,
        };

        if (i === search) {
          return backTraceFunction(backtraceMapper, search);
        }
      }
    }
  }
  return backTraceFunction(backtraceMapper, search);
};

const backTraceFunction = (backtraceMapper, foundNode) => {
  const rotations = { x: 0, y: 0 };
  console.log(backtraceMapper);
  if (Object.keys(backtraceMapper).length === 0) {
    return rotations;
  }

  let parent = backtraceMapper[foundNode].parent;
  let cameTaking = backtraceMapper[foundNode].cameTaking;

  while (parent !== null) {
    if (cameTaking === 'x') {
      rotations.x += 1;
    } else if (cameTaking === 'y') {
      rotations.y += 1;
    }
    cameTaking = backtraceMapper[parent].cameTaking;
    parent = backtraceMapper[parent].parent;
  }

  return rotations;
};

console.log(bfs(adjacencyMatrix, 4, 3));
