/*
 * Get mined blocks
 */

function getMinedBlocks(miner, startBlockNumber, endBlockNumber) {
  if (endBlockNumber == null) {
    endBlockNumber = eth.blockNumber;
    console.log("Using endBlockNumber: " + endBlockNumber);
  }
  if (startBlockNumber == null) {
    startBlockNumber = endBlockNumber - 10000;
    console.log("Using startBlockNumber: " + startBlockNumber);
  }
  console.log("Searching for miner \"" + miner + "\" within blocks "  + startBlockNumber + " and " + endBlockNumber + "\"");

  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    if (i % 1000 == 0) {
      console.log("Searching block " + i);
    }
    var block = eth.getBlock(i);
    if (block != null) {
      if (block.miner == miner || miner == "*") {
        console.log("Found block " + block.number);
        printBlock(block);
      }
      if (block.uncles != null) {
        for (var j = 0; j < 2; j++) {
          var uncle = eth.getUncle(i, j);
          if (uncle != null) {
            if (uncle.miner == miner || miner == "*") {
              console.log("Found uncle " + block.number + " uncle " + j);
              printUncle(block, j, uncle);
            }
          }
        }
      }
    }
  }
}
