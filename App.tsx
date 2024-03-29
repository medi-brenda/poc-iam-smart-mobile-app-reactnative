import 'expo-dev-client';
import React, { Component, useCallback } from 'react';
import { Alert, Text, Button, View, StyleSheet, Linking } from 'react-native';
import * as ExpoLinking from 'expo-linking';
import * as ExpoWebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';

const expoAppURL = "exp://exp.host/@medibrenda/poc-iam-smart-onlineservice-app-reactnative?release-channel=default";
const easAppURL = "exp+poc-iam-smart-onlineservice-app-reactnative://expo-development-client/?url=https%3A%2F%2Fu.expo.dev%2F4b77fc4f-ea89-452e-b491-d103e3cac86c%3Fchannel-name%3Dmain";
const expoRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-onlineservice-app-reactnative_expo.html";
const easRedirectURL = "https://mediconcen.com/poc-iam-smart/poc-iam-smart-html/call-poc-iam-smart-onlineservice-app-reactnative_eas.html";

// React Native Linking
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>In poc-iam-smart-mobile-app-reactnative</Text>

        <OpenURLButton url={expoAppURL}>Open Online Service App with Bare ReactNative.Linking Expo URL</OpenURLButton>
        <OpenURLButton url={easAppURL}>Open Online Service App with Bare ReactNative.Linking EAS URL</OpenURLButton>

        <Button
          title="Open Online Service App with Expo ReactNative.Linking Expo URL"
          onPress={this._handleOpenWithExpoLinkingExpoURL}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with Expo ReactNative.Linking EAS URL"
          onPress={this._handleOpenWithExpoLinkingEasURL}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with Expo.WebBrowser Expo URL"
          onPress={this._handleOpenWithExpoWebBrowserExpoURL}
          style={styles.button}
        />

        <Button
          title="Open Online Service App with Expo.WebBrowser EAS URL"
          onPress={this._handleOpenWithExpoWebBrowserEasURL}
          style={styles.button}
        />

      </View>
    );
  }

  // Expo Linking
  _handleOpenWithExpoLinkingExpoURL = () => {
    ExpoLinking.openURL(expoAppURL);
  };

  _handleOpenWithExpoLinkingEasURL = () => {
    ExpoLinking.openURL(easAppURL);
  };

  // Expo WebBrowser
  _handleOpenWithExpoWebBrowserExpoURL = () => {
    ExpoWebBrowser.openBrowserAsync(expoRedirectURL);
  };

  _handleOpenWithExpoWebBrowserEasURL = () => {
    ExpoWebBrowser.openBrowserAsync(easRedirectURL);
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