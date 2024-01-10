/**
 * Method to generate the grid to virtualized list
 */
export const getItemGrid = <T extends Object>(
  _data: T[],
  index: number,
  gridSize = 3
) => {
  let items = [];
  for (let i = 0; i < gridSize; i++) {
    const item = _data[index * gridSize + i];
    item && items.push(item);
  }
  return items;
};
