import React, { Component } from 'react';
import { Text, Button, View, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>In poc-iam-smart-mobile-app-reactnative</Text>

        <Button
          title="Open Online Service App with ReactNative.Linking"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Open Online Service App with Expo.WebBrowser"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
      </View>
    );
  }

  _handleOpenWithLinking = () => {
    Linking.openURL('exp://exp.host/@medibrenda/poc-iam-smart-onlineservice-app-reactnative?release-channel=default');
  };

  _handleOpenWithWebBrowser = () => {
    WebBrowser.openBrowserAsync('https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-onlineservice-app-reactnative.html');
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'limegreen',
  },
  button: {
    marginVertical: 10,
  },
});