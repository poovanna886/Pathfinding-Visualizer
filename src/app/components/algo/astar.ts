export const astar = (grid: Node[][] ,startNode: Node, endNode:Node): Node[] => {
  const visitedNodes: Node[] = [];

  const unvisitedNodes: Node[] = [];

  for (const row of grid){
    for (const node of row){
      node.distance = (node.row === startNode.row && node.col === startNode.col) ? 0 : Infinity;
      node.h = Math.abs(node.col - endNode.col) + Math.abs(node.row - endNode.row);
      unvisitedNodes.push(node);
    }
  }
  console.log(grid);

  while (unvisitedNode.length){
    sortUnvisited(unvisitedNodes);

    const closestNode = unvisitedNodes.shift();

    if (closestNode.distance === Infinifty) {break;}
    if (closestNode.type === NodeTypes.wall) { continue;}
    closestNode.visited = true;
    visitedNodes.push(closestNode);

    if (closestNode.row === endNode.row && closetNode.col === endNode.col) {break;}
    updateNeighbours(closetNode, grid);
  }
  return visitedNodes;


};

const  sortUnvisited(unvisitedNodes: Node[]) : void => {
  unvisitedNodes.sort((nodeA, nodeB) => {
    if (nodeA.distance + nodeA.h === nodeB.distance + nodeB.h){
      return nodeA.h - nodeB.h;
    }
    return nodeA.distance + nodeB.distance - nodeB.h;
  });

};
