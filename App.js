/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import * as eos from './eos';

//----TEST VARIABLES----
const pubKeyTest = 'EOS7Tq7KKKz1UD5mzotQ5Ls3caVpfXKvEDdk4qKx2Xu4Qsr9UBxtW';
const transactionIDtest = 'd4d95c85db899a0e54328b2f0c2e2062f1d7dc4445d04008836367d1c5448298';
const blockNumHintTest = '9100334';
//const privKeyTest = '5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc';
//const pubKey2Test = 'EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG';
//const pubKeyTest2 = 'EOS86rDVGVU5UJAeAvDvRNKGJEDMjxGWr9vJBtBzCUW7s6zK2Puqp';
//const privKeyTest = '5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc';
const privKeyTest2 = '5KQwrPbwdL6PhXujxW37FSSQZ1JiwsST4cqQzDeyXtP79zkvFD3';
//const accountNameTest = 'binancecleos';
//const exampleTrxMainNet = '87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a';
//const exampleTrxMainNetBlockHeight = 10251887;

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {

  componentDidMount(){
//----BLOCKCHAIN----
//eos.getBlockHeight();
//eos.getCurrentBlockInfo();

//----KEYS----
//  more infos: https://github.com/EOSIO/eosjs-ecc/blob/master/src/key_private.js
//  seed: 'string' any length string. This is private. The same seed produces the same
//  private key every time. At least 128 random bits should be used to produce a good private key.
//eos.generateRandomPrivKey();
//console.log('privKey generated from seed SEED123: ', eos.generatePrivKeyFromSeed('SEED123'));
//eos.fromPrivToPub('5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc');
//eos.isPubKeyValid('EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG');
//eos.isPrivKeyValid('5HrZWBGf6ovYBqdDkoGBqzXCKRxyXdkEmke6LVufN3zK4q9Hctc');

//----ACCOUTS----
//  EOS public and private keys can be generated off the chain, but EOS users need to create a user
//  name before they can operate on the chain. So activated users are needed to send on-chain transactions
//  to new users in order to help them create accounts. By default users need to find Tripartite help.
//  main net only:
//eos.getAccountNamesFromPubKey('EOS7pMyqadiD7DE7uZEHuEejZu2Qa7kiMmNVHf35bJEtqyniy8vBG');
//  main net only: (ie 'binancecleos'):
//eos.getAccSystemStats('binancecleos');
//  account name must be less than 13 characters
//  can only contain the following symbols: .12345abcdefghijklmnopqrstuvwxyz:
//  default: bytes = 8192, stake_net_quantity = '10.0000 SYS', stake_cpu_quantity = '10.0000 SYS', transfer = 0:
//  ownerPubKey and activePubKey can be the same, but is less secure
//eos.createAccountPackage('ownerPubKey', 'activePubKey', 'accountName', bytes (optional), stake_net_quantity (optional), stake_cpu_quantity (optional), transfer (optional));
//eos.createAccountPackage(pubKeyTest, pubKeyTest, 'jjekcksn3');
//'accountName', ownerPubKey, activePubKey
//eos.createSingleAccount('iexkweq3l', pubKeyTest, pubKeyTest);

//----TRANSACTIONS----
// Transactions can be considered confirmed with 99.9% certainty after an average of 0.25 seconds from time of broadcast.
// The EOS aBFT algorithm provides 100% confirmation of irreversibility within 1 second.
//  sender, receiver, amount in format: '50.0000 SYS' , memo, sign = true, broadcast = true
//eos.transfer('inita', 'initb', '4.0000 SYS', 'myMemo1', true, true);
//first creates an unsigned transaction, signs it and then broadcasts it. All separately. See logs()
//trx data from transaction.transaction.actions[0].data
//see https://github.com/EOSIO/eosjs/issues/306
//eos.transferSignPushTransaction('inita', 'initb', '5.0000 SYS', 'myMemo2', privKeyTest2);
//just signs the transaction and returns it:
//eos.signTransaction(trxData, privKey);
//  insert return value from eos.transfer(..., signed = true, broadcast = false);
//eos.pushTransaction(returnValueEos.transfer); 
//  transfers and broadcasts the transaction separately:
//  eos.transferPushTransaction('inita', 'initb', '5.0000 SYS', 'myMemo2');
//  accountName, (+ int allAboveBlockHeightX --> optional)
//eos.getOutgoingTransactions('binancecleos');
//  perform transaction and add the id + block number as arg:
//  where to get blockNumHint? https://github.com/EOSIO/eosjs/issues/288
//eos.getTransaction('87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a', 10251887);
//eos.isTransactionExecuted('87134edc78cf9d1d183e896cbd96c8a89144511b33bce91c82f99321d0d2673a', 10251887)
//SIG_K1_KVxbVaErwxYQ7RkngUcJQS7fVojC2nX57uKPg2S9M1cpLsPgioVx4FJaN9nTikxnPX6k3NwY7nLqPPiHmiFybt8JZJ2QjA

//----CURRENCY----
//eos.getCurrencyBalance('inita'); //using EOS account name
//eos.getCurrencyStats('SYS'); //works for tokens as well
//  amount in format '1000.0000 XYZ', receiver, memo:
//eos.createToken('1000.0000 XYZ', 'inita','new Token');

//----OTHER----
//  converts '1.3000 EOS' --> 1.3, see floatRegex in eos.js
//console.log('tofloat: ', eos.toFloat('1.03002000'));
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