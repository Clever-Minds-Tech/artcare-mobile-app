import React from 'react';
//import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';



// import all the components we are going to use
import { SafeAreaView, View, StyleSheet, Text, Linking } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Hyperlink to Open It in The Browser Using Linking
        </Text>
        <Text style={styles.textStyle}>
          Hi welcome to{' '}
          <Text
            style={styles.hyperlinkStyle}
            onPress={() => {
              Linking.openURL('https://aboutreact.com');
            }}>
            AboutReact
          </Text>
          . About React is the online tutorial website. You can find the Example
          code related to React Native. We are trying our best to provide you
          the quality content
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textStyle: {
    margin: 10,
  },
  hyperlinkStyle: {
    color: 'blue',
  },
  titleStyle: {
    fontSize: 20,
    margin: 10,
  },
});



/*
const ReportScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <Text>ReportScreen </Text>
            </View>
        </Content>
    </Container>
);

export default ReportScreen; */
