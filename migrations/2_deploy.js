var FilesContract = artifacts.require("Files");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(FilesContract).then(async deployed => {
    const contractInstance = new web3.eth.Contract(FilesContract.abi, deployed.address);
    console.log(`RESULT: ${await contractInstance.methods.arToETHCoefficient().call()}`)
  });
};