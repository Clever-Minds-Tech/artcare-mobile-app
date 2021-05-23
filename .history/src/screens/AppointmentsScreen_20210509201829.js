import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

/*const AppointmentsScreen = ({
    params,
}) => (
    <Container>
        <Header/>
        <Content>
            <View>
                <Text>AppointmentsScreen </Text>
            </View>
        </Content>
    </Container>
);
*/


import * as Linking from 'expo-linking';

export default class Anchor extends React.Component {
  _handlePress = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {
    return (
      <Text {...this.props} onPress={this._handlePress}>
        {this.props.children}
      </Text>
    );
  }
}



//export default AppointmentsScreen;