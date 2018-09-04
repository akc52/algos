var square = 0;
var board = "";

const width = 18;
const height = 18;

for( var r = 0; r < height; r++){
	for( var c = 0; c < width; c++) {
   var newBlock = " ";
   if (square % 2 === 0) newBlock = "#"
   board += newBlock;
   square += 1;
  }
  board += '\n';
  square += 1;
}

console.log(board)