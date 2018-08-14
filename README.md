
# react-native-simple-eos-wallet
react-native-simple-eos-wallet made by Marcel Morales.  
using [eosjs](https://github.com/EOSIO/eosjs), [eosjs-node-cli](https://github.com/MarcelBlockchain/eosjs-node-cli), [rn-nodefiy](https://github.com/tradle/rn-nodeify) and [eosjs-react-native](https://github.com/EvaCoop/eosjs-react-native), thanks a lot to [@raphgodro](https://github.com/raphaelgodro)!


## Usage
* Using standard private key on test net by default. Change ```config``` in ```./eos.js```
* Make sure to have docker running as explained [here](https://github.com/EOSIO/eosjs/tree/master/docker)
* Uncomment lines to enable functions in ```./app.js``` 
* Functions ```print``` and ```return``` all of their values, see ```./eos.js```

## Installation
clone the repo and
```
npm install
```
* You need to do a little tweak now in the library `isomorphic-fetch` file `fetch-npm-browserify.js`
```
vi ./node_modules/isomorphic-fetch/fetch-npm-browserify.js

```
Add a line before the `module.exports` line.

```
var self = this;
```

You then need to activate the browserifying using the rn-nodeify script. It is written in a sh script in the repo.

```
sh hack_to_browser.sh
```
Then

```
react-native link
```
Done!

---
  
## Blockchain
```js
eos.getBlockHeight();
eos.getCurrentBlockInfo();
```

## Keys
* more infos: https://github.com/EOSIO/eosjs-ecc/blob/master/src/key_private.js  
* seed: any length string. This is private. The same seed produces the same private key every time. At least 128 random bits should be used to produce a good private key.
```js
eos.generateRandomPrivKey();
console.log('privKey generated from seed SEED123: ', eos.generatePrivKeyFromSeed('SEED123'));  
eos.fromPrivToPub('5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc');
eos.isPubKeyValid('EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG');
eos.isPrivKeyValid('5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc');
```

## Accounts
EOS public and private keys can be generated off the chain, but EOS users need to create an account before they can operate on the chain. So activated users are needed to send on-chain transactions to new users in order to help them create accounts. By default users need to find [tripartite help](https://www.zeos.co/).  
```js 
//main net only:  
eos.getAccountNamesFromPubKey('EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG');  
//  main net only: (ie 'binancecleos'):  
eos.getAccSystemStats('binancecleos');  
```
Account name must be less than 13 characters and can only contain the following symbols ```.12345abcdefghijklmnopqrstuvwxyz```:  
```js
//  default: bytes = 8192, stake_net_quantity = '10.0000 SYS', stake_cpu_quantity = '10.0000 SYS',  transfer = 0:  
//  ownerPubKey and activePubKey can be the same, but is less secure  
eos.createAccountPackage('ownerPubKey', 'activePubKey', 'accountName', bytes, stake_net_quantity, stake_cpu_quantity, transfer);  
eos.createSingleAccount('accountName', ownerPubKey, activePubKey);
```  
  
## Transactions  
* Transactions can be considered confirmed with 99.9% certainty after an average of 0.25 seconds from time of broadcast.
* The EOS aBFT algorithm provides 100% confirmation of irreversibility within 1 second.
```js 
//  sender, receiver, amount in format: '50.0000 SYS' , memo, sign = true, broadcast = true  
eos.transfer('inita', 'initb', '50.0000 SYS', 'myMemo', true, true);  
//first creates an unsigned transaction, signs it and then broadcasts it. All separately. See logs()
//trx data from transaction.transaction.actions[0].data
eos.transferSignPushTransaction('inita', 'initb', '5.0000 SYS', 'myMemo2', false, false);
//just signs the transaction and returns it:
eos.signTransaction(trxData, privKey);
//  insert return value from eos.transfer(..., signed = true, broadcast = false);  
eos.pushTransaction(returnValueEos.transfer);  
//  accountName, (+ int allAboveBlockHeightX --> optional)  
eos.getOutgoingTransactions('binancecleos');  
//  perform transaction and add the id + block number as arg:  
//  where to get blockNumHint? https://github.com/EOSIO/eosjs/issues/288  
eos.getTransaction('87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a', 10251887);  
eos.isTransactionExecuted('87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a', 10251887);  
```
  
## Currency  
```js
//using EOS account name
eos.getCurrencyBalance('inita');   
//works for tokens as well 
eos.getCurrencyStats('XYZ');  
//amount in format '1000.0000 XYZ', receiver, memo:  
eos.createToken('1000.0000 XYZX', 'inita','new Token');
```

## Other  
```js 
//converts '1.3000 EOS' to 1.3, see floatRegex in ./eos.js  
console.log('tofloat: ', eos.toFloat('1.03002000'));
```
