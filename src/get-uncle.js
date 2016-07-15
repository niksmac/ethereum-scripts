/*
 * Get uncle details
 * http://ethereum.stackexchange.com/a/2936/259
 */

function printUncle(block, uncleNumber, uncle) {
  console.log("Block number     : " + block.number + " , uncle position: " + uncleNumber + "\n"
    + " Uncle number    : " + uncle.number + "\n"
    + " hash            : " + uncle.hash + "\n"
    + " parentHash      : " + uncle.parentHash + "\n"
    + " nonce           : " + uncle.nonce + "\n"
    + " sha3Uncles      : " + uncle.sha3Uncles + "\n"
    + " logsBloom       : " + uncle.logsBloom + "\n"
    + " transactionsRoot: " + uncle.transactionsRoot + "\n"
    + " stateRoot       : " + uncle.stateRoot + "\n"
    + " miner           : " + uncle.miner + "\n"
    + " difficulty      : " + uncle.difficulty + "\n"
    + " totalDifficulty : " + uncle.totalDifficulty + "\n"
    + " extraData       : " + uncle.extraData + "\n"
    + " size            : " + uncle.size + "\n"
    + " gasLimit        : " + uncle.gasLimit + "\n"
    + " gasUsed         : " + uncle.gasUsed + "\n"
    + " timestamp       : " + uncle.timestamp + "\n"
    + " transactions    : " + uncle.transactions + "\n");
}
