/*
 * Find Non-Zero Transaction Count In A Range Of Blocks
 */
function checkTransactionCount(startBlockNumber, endBlockNumber) {
  console.log("Searching for non-zero transaction counts between blocks "  + startBlockNumber + " and " + endBlockNumber);
  for (var i = startBlockNumber; i <= endBlockNumber; i++) {
    var block = eth.getBlock(i);
    if (block != null) {
      if (block.transactions != null && block.transactions.length != 0) {
        console.log("Block #" + i + " has " + block.transactions.length + " transactions")
      }
    }
  }
}
