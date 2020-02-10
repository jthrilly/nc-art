 /*
  - Rules of a GridItem:
  - Generate 4x4 array of GridItems
  - If level 3, be a TileItem
  - If level 1 or 2:
    - For each grid item, 25% chance of being a GridItem
    - Otherwise a TileItem
*/ 

const isGridItem = level => level < 3 ? Math.random() > 0.75 : false; // 25% chance when level less than 3.

const tiles = [
  'cross',
  'frown',
  'line',
  'plus',
  'slash',
  'star',
  'tee',
];

const getRandomTile = () => tiles[Math.floor(Math.random()*tiles.length)];

function ConstructGrid(rows = 4, columns = 4, level = 1) {
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
        const element = isGridItem(level) ? ConstructGrid(rows, columns, level++) : getRandomTile() ;
        console.log(`Row: ${i}, Col: ${j}, Element: ${element} \n`);
    }
  }
};


ConstructGrid();