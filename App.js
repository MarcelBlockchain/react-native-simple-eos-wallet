import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as eos from './eos';

// ----TEST VARIABLES ----
const pubKeyTest = 'EOS6MRyAjQq8ud7hVNYcfnVPJqcVpscN5So8BhtHuGYqET5GDW5CV' // from privKeyTest, local test net
const pubKeyTest2 = 'EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG' // from 'itamnetwork2' on main net
// const pubKeyTest3 = 'EOS86rDVGVU5UJAeAvDvRNKGJEDMjxGWr9vJBtBzCUW7s6zK2Puqp'

const privKeyTest = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3'
// const privKeyTest2 = '5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc'
const exampleTrxMainNet = '87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a'
const trBlockHeight = 10251887
const acc1 = 'inita'
const acc2 = 'initb'
const accBinance = 'binancecleos'
const bytes = 8192
const stake_net_quantity = '10.0000 SYS'
const stake_cpu_quantity = '10.0000 SYS'
const transfer = 0
const quantityTest = '2.0000 SYS'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentDidMount(){
// ALL  UNCOMMENTED  FUNCTIONS WILL BE INVOKED in componentDidMount()

// ----BLOCKCHAIN----
// eos.getBlockHeight()
eos.getCurrentBlockInfo()

// ----KEYS----
//  more infos: https://github.com/EOSIO/eosjs-ecc/blob/master/src/key_private.js
//  seed: 'string' any length string. This is private. The same seed produces the same
//  private key every time. At least 128 random bits should be used to produce a good private key.
// eos.generateRandomPrivKey()
// console.log('privKey generated from seed SEED123: ', eos.generatePrivKeyFromSeed('SEED123'))
// eos.fromPrivToPub(privKeyTest)
// eos.isPubKeyValid(pubKeyTest)
// eos.isPrivKeyValid(privKeyTest)

// ----ACCOUTS----
//  EOS public and private keys can be generated off the chain, but EOS users need to create a user
//  name before they can operate on the chain. So activated users are needed to send on-chain transactions
//  to new users in order to help them create accounts. By default users need to find Tripartite help.
//  main net only:
// eos.getAccountNamesFromPubKey(pubKeyTest2)
//  main net only: (i.e. 'binancecleos'):
// eos.getAccSystemStats(accBinance)
//  account name must be less than 13 characters
//  can only contain the following symbols: .12345abcdefghijklmnopqrstuvwxyz:
//  default: bytes = 8192, stake_net_quantity = '10.0000 SYS', stake_cpu_quantity = '10.0000 SYS', transfer = 0:
//  ownerPubKey and activePubKey can be the same, but is less secure
//  optional: bytes, stake_net_quantity, stake_cpu_quantity, transfer
// eos.createAccountPackage('ownerPubKey', 'activePubKey', 'accountName', bytes, stake_net_quantity, stake_cpu_quantity, transfer)
//  'accountName', ownerPubKey, activePubKey
// eos.createSingleAccount('accountName', pubKeyTest, pubKeyTest)

// ----TRANSACTIONS----
// Transactions can be considered confirmed with 99.9% certainty after an average of 0.25 seconds from time of broadcast.
// The EOS aBFT algorithm provides 100% confirmation of irreversibility within 1 second.
//  sender, receiver, quantity in format: '50.0000 SYS' , memo, | + optional: sign = true, broadcast = true
// eos.transfer(acc1, acc2, '4.0000 SYS', 'myMemo12', true, true)
//  first creates an unsigned transaction, signs it and then broadcasts it. All separately. See logs()
// eos.transferSignPushTransaction(acc1, acc2, '5.0000 SYS', 'myMemo2')
//  just signs the transaction and returns it:
//  args: tr, from, to, quantity, memo
// eos.signTr(tr, acc1, acc2, quantity, memo) // trxData, privKeyTest
//  insert return value from eos.transfer(..., signed = true, broadcast = false)
//  returns signature. Args: (from, to, quantity, memo = '')
// eos.getSignature(acc1, acc2, quantityTest, memo = 'myMemo7')
//  insert eg.: return value from eos.transfer(..., signed = true, broadcast = false);
// eos.pushTransaction(returnValueFromEos.transfer)
//  transfers, signs and broadcasts the transaction separately:
// eos.transferSignPushTransaction(acc1, acc2, '5.0000 SYS', 'myMemo2')
//  accountName, (+ int allAboveBlockHeightX --> optional)
// eos.getOutgoingTransactions(accBinance)
//  perform transaction and add the id + block number as args
//  note: example tr only visible when switching to main net
// eos.getTransaction(exampleTrxMainNet, trBlockHeight) // sender: 'binancecleos' on main net
// eos.isTransactionExecuted(exampleTrxMainNet, trBlockHeight)

// ----CURRENCY----
// eos.getCurrencyBalance(acc1) //  using EOS account name
// works for tokens as well, see https://github.com/eoscafe/eos-airdrops
// 'SYMBOL', 'eos.contractName'
// eos.getCurrencyStats('IQ', 'everipediaiq') // IQ on main net
//  amount in format '1000.0000 XYZ', receiver, memo:
// eos.createToken('1000.0000 XXZX', acc1, 'new Token')

// ----OTHER----
//  converts '1.3000 EOS' --> 1.3, see floatRegex in eosj.js
// console.log('tofloat: ', eos.toFloat('1.03002000'))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>react-native-simple-eos-wallet</Text>
        <Text style={styles.instructions}>by Marcel Morales</Text>
        <Text style={styles.welcome}>check ./App.js, ./eos.js and README.md for more info</Text>
        <Text style={styles.welcome}>all uncommented functions will run in componentDidMount()</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});