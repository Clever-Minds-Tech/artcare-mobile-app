import React from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CredentialsSettingsScreen from './src/screens/CredentialsSettingsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import FAQScreen from './src/screens/FAQScreen';
import ReportScreen from './src/screens/ReportsScreen';
import AppointmentsScreen from './src/screens/AppointmentsScreen';
import PMAScreen from './src/screens/PMAScreen';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    const Drawer = createDrawerNavigator();

    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" drawerStyle={{
          backgroundColor: '#FDEBED',
          width: '100%',
        }}
        drawerContentOptions={{
          activeTintColor: '#e91e63',
          itemStyle: { 
            marginVertical: 10
          },
        }}
        >
          <Drawer.Screen name="Dados de login" component={CredentialsSettingsScreen} />
          <Drawer.Screen name="Dados pessoais" component={ProfileScreen} />
          <Drawer.Screen name="Calendário menstrual" component={CalendarScreen} />
          <Drawer.Screen name="Medicações e consultas" component={AppointmentsScreen} />
          <Drawer.Screen name="Relatórios" component={ReportScreen} />
          <Drawer.Screen name="Perguntas frequentes" component={FAQScreen} />
          <Drawer.Screen name="Clínicas de PMA" component={PMAScreen} />
          
        </Drawer.Navigator>

      </NavigationContainer>
    );
  }
}