
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

import React, { Component } from 'react';
import { Button, Linking, View, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  button: {
    marginVertical: 10,
  },
});

const ReportScreen = ({
    params,
    _handleOpenWithLinking = () => {
        Linking.openURL('https://expo.io');
      },
    
      _handleOpenWithWebBrowser = () => {
        WebBrowser.openBrowserAsync('https://expo.io');
      }
}) => (
    <Container>
<View style={styles.container}>
        <Button
          title="Open URL with ReactNative.Linking"
          onPress={this._handleOpenWithLinking}
          style={styles.button}
        />
        <Button
          title="Open URL with Expo.WebBrowser"
          onPress={this._handleOpenWithWebBrowser}
          style={styles.button}
        />
      </View>
      </Container>
);

export default ReportScreen; 
