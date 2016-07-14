/*
 * Find tokens in the blockchain
 * From http://ethereum.stackexchange.com/a/3862/259
 */

var tokenInterface = [{"type": "function","name": "name","constant": true,"inputs": [],"outputs": [{"name": "","type": "string"}]},{"type": "function","name": "decimals","constant": true,"inputs": [],"outputs": [{"name": "","type": "uint8"}]},{"type": "function","name": "balanceOf","constant": true,"inputs": [{"name": "","type": "address"}],"outputs": [{"name": "","type": "uint256"}]},{"type": "function","name": "symbol","constant": true,"inputs": [],"outputs": [{"name": "","type": "string"}]},{"type": "function","name": "transfer","constant": false,"inputs": [{"name": "_to","type": "address"},{"name": "_value","type": "uint256"}],"outputs": []},{"type": "constructor","inputs": [{"name": "_supply","type": "uint256"},{"name": "_name","type": "string"},{"name": "_decimals","type": "uint8"},{"name": "_symbol","type": "string"}]},{"name": "Transfer","type": "event","anonymous": false,"inputs": [{"indexed": true,"name": "from","type": "address"},{"indexed": true,"name": "to","type": "address"},{"indexed": false,"name": "value","type": "uint256"}]}];
TokenContract = web3.eth.contract(tokenInterface);

var lowestBlock = 474147; //November 3, 2015 - last time the ABI above was changed
var highestBlock = eth.getBlock("latest").number;
//var lowestBlock = 483325; //smaller test case with just one coin (MistCoin)
//var highestBlock = 484731; //smaller test case with just one coin (MistCoin)
for (var x=lowestBlock; x < highestBlock; x++) {
  var transactions = eth.getBlock(x).transactions;
  for (var y=0; y < transactions.length; y++) {
    //    if (x % 100 == 0) { console.log("."); }
    var contractAddr = eth.getTransactionReceipt(transactions[y]).contractAddress;
    if (contractAddr != null) {
      var tokenInstance = TokenContract.at(contractAddr);
      var symbol = "";
      var decimals = "";
      var name = "";
      try {
        symbol = tokenInstance.symbol();
      } catch(err) {
      }
      try {
        decimals = tokenInstance.decimals();
      } catch(err) {
        //don't do anything here, just catch the error so program doesn't die
      }
      try {
        name = tokenInstance.name();
      } catch(err) {
        //don't do anything here, just catch the error so program doesn't die
      }
      if (symbol != null && symbol != "" && name != null && name != "") {
        console.log("-----------");
        console.log("Contract Address: " + contractAddr);
        console.log("Name: " + name);
        console.log("Symbol: " + symbol);
        console.log("Decimals: " + decimals);
        console.log("-----------");
      }
      //       console.log(contractAddr);  //testing
    }
  }
  //  console.log(eth.getBlock(x).transactions);  //testing
}
