/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import './shim'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
