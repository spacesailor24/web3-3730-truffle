### Original Issue

[web3-3730](https://github.com/ethereum/web3.js/issues/3730)

### This Project's Execution Steps

1. Clone repo
2. `npm i`
3. `npx truffle migrate`

At the bottom of the output you should see:

```
   > value sent:          0 ETH
   > total cost:          0.0053726 ETH

RESULT: 14757395258967641292

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0053726 ETH
```

Where `RESULT` is the response from the call `await contractInstance.methods.arToETHCoefficient().call()` that fails when executing in [this](https://github.com/vporton/test-web3-read-int128) enviroment
