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
          title="Open Online Service App with ReactNative.Linking Expo"
          onPress={this._handleOpenWithLinkingExpo}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with ReactNative.Linking EAS"
          onPress={this._handleOpenWithLinkingEAS}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with Expo.WebBrowser Expo"
          onPress={this._handleOpenWithWebBrowserExpo}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with Expo.WebBrowser EAS"
          onPress={this._handleOpenWithWebBrowserEAS}
          style={styles.button}
        />

      </View>
    );
  }

  _handleOpenWithLinkingExpo = () => {
    Linking.openURL('exp://exp.host/@medibrenda/poc-iam-smart-onlineservice-app-reactnative?release-channel=default');
  };

  _handleOpenWithLinkingEAS = () => {
    Linking.openURL('exp+poc-iam-smart-onlineservice-app-reactnative://expo-development-client/?url=https%3A%2F%2Fu.expo.dev%2F4b77fc4f-ea89-452e-b491-d103e3cac86c%3Fchannel-name%3Dmain');
  };

  _handleOpenWithWebBrowserExpo = () => {
    WebBrowser.openBrowserAsync('https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-onlineservice-app-reactnative_expo.html');
  };

  _handleOpenWithWebBrowserEAS = () => {
    WebBrowser.openBrowserAsync('https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-onlineservice-app-reactnative_eas.html');
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