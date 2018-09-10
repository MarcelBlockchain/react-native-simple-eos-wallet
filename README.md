
# react-native-simple-eos-wallet
react-native-simple-eos-wallet made by Marcel Morales.  
using [eosjs](https://github.com/EOSIO/eosjs), [eosjs-node-cli](https://github.com/MarcelBlockchain/eosjs-node-cli), [rn-nodefiy](https://github.com/tradle/rn-nodeify) and [eosjs-react-native](https://github.com/EvaCoop/eosjs-react-native), thanks a lot to [@raphgodro](https://github.com/raphaelgodro)!
  
## Usage
* Using standard private key on test net by default. Change ```config``` in ```./eos.js```
* Make sure to have docker running as explained [here](https://github.com/EOSIO/eosjs/tree/master/docker)
* Uncomment lines to enable functions in ```./app.js``` 
* Functions ```print``` and ```return``` all of their values, see ```./eos.js```
  
## Blockchain
```js
eos.getBlockHeight()
eos.getCurrentBlockInfo()
```

## Keys
* more infos: https://github.com/EOSIO/eosjs-ecc/blob/master/src/key_private.js  
* seed: any length string. This is private. The same seed produces the same private key every time. At least 128 random bits should be used to produce a good private key.
```js
//  src: https://github.com/bitcoinjs/bip39/blob/master/index.js
//  Generates a random mnemonic (uses crypto.randomBytes under the hood), defaults to //  128-bits of entropy
//  strength = 256 for 24 words, 128 for 12
eos.generateMnemonic(128)
//  derives the master, owner & active private and public keys from mnemonic
eos.deriveFromMnemonic(eos.generateMnemonic(128))
//  uses "crypto": "react-native-crypto" for real random bytes
eos.generateRandomPrivKey()
console.log(eos.generatePrivKeyFromSeed('SEED123'))
eos.fromPrivToPub(privKeyTest)
eos.isPubKeyValid(pubKeyTest)
eos.isPrivKeyValid(privKeyTest)
```

## Accounts
EOS public and private keys can be generated off the chain, but EOS users need to create an account before they can operate on the chain. So activated users are needed to send on-chain transactions to new users in order to help them create accounts. By default users need to find [tripartite help](https://www.zeos.co/).  
```js 
//  main net only:  
eos.getAccountNamesFromPubKey(pubKeyTest2)
//  main net only: (i.e. 'binancecleos'):
eos.getAccSystemStats(accBinance)
//  account name must be less than 13 characters
//  can only contain the following symbols: .12345abcdefghijklmnopqrstuvwxyz:
//  default: bytes = 8192, stake_net_quantity = '10.0000 SYS', stake_cpu_quantity = '10.0000 SYS', transfer = 0:
//  ownerPubKey and activePubKey can be the same, but is less secure
//  optional: bytes, stake_net_quantity, stake_cpu_quantity, transfer
eos.createAccountPackage('ownerPubKey', 'activePubKey', 'accountName', bytes, stake_net_quantity, stake_cpu_quantity, transfer)
//  args: 'accountName', ownerPubKey, activePubKey
eos.createSingleAccount('accountName', pubKeyTest, pubKeyTest)
```  
  
## Transactions  
* Transactions can be considered confirmed with 99.9% certainty after an average of 0.25 seconds from time of broadcast.
* The EOS aBFT algorithm provides 100% confirmation of irreversibility within 1 second.
```js 
//  sender, receiver, quantity in format: '50.0000 SYS' , memo, | + optional: sign = true, broadcast = true
eos.transfer(acc1, acc2, '4.0000 SYS', 'myMemo1', true, true)
//  first creates an unsigned transaction, signs it and then broadcasts it. All separately. See logs()
eos.transferSignPushTransaction(acc1, acc2, '5.0000 SYS', 'myMemo2', privKeyTest)
//  just signs the transaction and returns it:
//  returns signature. Args: (from, to, quantity, memo = '')
eos.getSignature(acc1, acc2, quantityTest, memo = 'myMemo7')
//  signs transaction and returns it. Args: (transaction, from, to, quantity, memo = '')
eos.signTr(tr, from, to, quantity, memo = 'otherMemo')
//  insert return value from eos.transfer(..., signed = true, broadcast = false);
eos.pushTransaction(returnValueFrom.eos.transfer)
//  accountName, (+ int allAboveBlockHeightX --> optional)
eos.getOutgoingTransactions(accBinance)
//  get transaction info. Optionally with a block number hint (trBlockHeight)
//  note: example tr only visible when switching to main net
eos.getTransaction(exampleTrxMainNet, trBlockHeight) // sender e.g.: 'binancecleos' on main net
//  was tr executed? Optionally pass a block number hint (trBlockHeight). Returns bool
eos.isTransactionExecuted(exampleTrxMainNet, trBlockHeight)
```
  
## Currency  
```js
// If you look at the result value, you can see an array in the form of a string.
// This is because there could be tokens with many different symbols in the account
eos.getCurrencyBalance(acc1) //  using EOS account name
// works for tokens as well, see https://github.com/eoscafe/eos-airdrops
// 'SYMBOL', 'eos.contractName'. E.g. 'EOS', 'eosio.token' (main net) / 'SYS', 'eosio.token' (local test net)
eos.getCurrencyStats('IQ', 'everipediaiq') // IQ on main net
//  amount in format '1000.0000 XYZ', receiver, memo:
eos.createToken('1000.0000 XXZX', acc1, 'new token memo')
```

## Other  
```js 
//  converts '1.3000 EOS' --> 1.3, see floatRegex in eosjs.js
console.log('tofloat: ', eos.toFloat('1.03002000'))
```
