/*
 * Get Account Balances And Including TheDAO Tokens
 * http://ethereum.stackexchange.com/a/3750/259
 */

function padTokens(s, n) {
  var o = s.toPrecision(n);
  while (o.length < n) {
    o = " " + o;
  }
  return o;
}

function padEthers(s) {
  var o = s.toFixed(18);
  while (o.length < 27) {
    o = " " + o;
  }
  return o;
}

function checkAllBalances() {
  var theDAOABI = [ { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "5e+22" } ], "name": "minTokensToCreate", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "2.668900014413644230605979e+24" } ], "name": "totalSupply", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "", "value": "1464426000" } ], "name": "closingTime", "inputs": [], "constant": true }, { "type": "function", "outputs": [], "name": "refund", "inputs": [], "constant": false }, { "type": "function", "outputs": [ { "type": "address", "name": "", "value": "0xda4a4626d3e16e094de3225a751aab7128e96526" } ], "name": "curator", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "balance", "value": "0" } ], "name": "balanceOf", "inputs": [ { "type": "address", "name": "_owner" } ], "constant": true }, { "type": "function", "outputs": [ { "type": "uint256", "name": "_numberOfProposals", "value": "0" } ], "name": "numberOfProposals", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "address", "name": "", "value": "0x807640a13483f8ac783c557fcdf27be11ea4ac7a" } ], "name": "extraBalance", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "bool", "name": "", "value": true } ], "name": "isFueled", "inputs": [], "constant": true }, { "type": "function", "outputs": [ { "type": "bool", "name": "success" } ], "name": "createTokenProxy", "inputs": [ { "type": "address", "name": "_tokenHolder" } ], "constant": false }, { "type": "function", "outputs": [ { "type": "uint256", "name": "_voteID" } ], "name": "vote", "inputs": [ { "type": "uint256", "name": "_proposalID" }, { "type": "bool", "name": "_supportsProposal" } ], "constant": false }, { "type": "event", "name": "FuelingToDate", "inputs": [ { "type": "uint256", "name": "value", "indexed": false } ], "anonymous": false }, { "type": "event", "name": "ProposalAdded", "inputs": [ { "type": "uint256", "name": "proposalID", "indexed": true }, { "type": "address", "name": "recipient", "indexed": false }, { "type": "uint256", "name": "amount", "indexed": false }, { "type": "bool", "name": "newCurator", "indexed": false }, { "type": "string", "name": "description", "indexed": false } ], "anonymous": false }, { "type": "event", "name": "ProposalTallied", "inputs": [ { "type": "uint256", "name": "proposalID", "indexed": true }, { "type": "bool", "name": "result", "indexed": false }, { "type": "uint256", "name": "quorum", "indexed": false } ], "anonymous": false } ];
  var theDAOAddress = "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413";
  var theDAO = eth.contract(theDAOABI).at(theDAOAddress);
  var theDAOTotal = 0;
  var ethersTotal = 0;

  console.log("  #     Account                                        TheDAO                      ethers");
  console.log("------- ------------------------------------------ ---------- ---------------------------");
  var i =0;
  eth.accounts.forEach( function(e){
    var tokens = theDAO.balanceOf(e) / parseFloat(1e16);
    theDAOTotal += parseFloat(tokens);
    var ethers = web3.fromWei(eth.getBalance(e), "ether");
    ethersTotal += parseFloat(ethers);
    console.log("  " + i + "\t" + e + " " + padTokens(tokens, 10) + " " + padEthers(ethers));
    i++;
  })
  console.log("------- ------------------------------------------ ---------- ---------------------------");
  console.log("  " + i + "                                               " + padTokens(theDAOTotal, 10) + " " + padEthers(ethersTotal));
};
