export const dijktra(grid:Node[][], startNode: Node, endNode:Node): Node[] => {
  const vistedNodes:Node[] = [];

  const unvistiedNodes: Node[] = [];

  for (const row of grid){
    for (const node of row){
      node.distance = (node.row === start.row && node.col === startNode.col) ? 0 : Infinity;
      unvisitedNodes.push(node);
    }
  }

  while (unvisitedNodes.length){
    sortUnvisited(unvisitedNodes, startNode);

    const closestNode = unvisitedNodes.shift();

    if (closestNode.distance === Infinity) {break;}
    if (closestNode.type === NodeTypes.wall) {continue;}

    closestNode.visited = true;
    visitedNodes.push(closestNode);

    if (closestNode.row === endNode.row && closestNode.col === endNode.col){break;}
    updateNeighbours(closestNode, grid);

  }

  return visitedNodes;
};

const sortUnvisited(unvisitedNodes: Node[], startNode:Node): void => {
  unvisitedNodes.sort((nodeA,nodeB) => {
    if (nodeA.distance === nodeB.distance){
      const getQuadrant = (node: Node): number => {
        if (node.row < startNode.row && node.col <= startNode.col)  {return 1;}
        if (node.row >= startNode.row && node.col < startNode.col)  {return 2;}
        if (node.row > startNode.row && node.col >= startNode.col)  {return 3;}
        if (node.row <= startNode.row && node.col > startNode.col)  {return 4;}
      };
      return getQuadrant(nodeB) - getQuadrant(nodeA);
    }
    return nodeA.distance - nodeB.distance;
  });
};
