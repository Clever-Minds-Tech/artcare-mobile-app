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
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './src/screens/LoginScreen';
import Signup from './src/screens/SignupScreen';
import CustomSidebarMenu from './src/components/CustomSidebarMenu'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      isLogged: true
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      Arial: require('./assets/fonts/arial.ttf'),
      ...Ionicons.font,
    });
    this.setState({ fontsLoaded: true });
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    }

    if (!this.state.isLogged) {
      return <Login />
    }


    const Drawer = createDrawerNavigator();

    return (
      <SafeAreaProvider>
        <NavigationContainer>
          <Drawer.Navigator
            drawerStyle={{
              backgroundColor: 'white',
              minWidth: '100%'

            }}
            drawerType="back"
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
            initialRouteName="Dados pessoais"
          >
            <Drawer.Screen name="Dados de login" component={CredentialsSettingsScreen} />
            <Drawer.Screen name="Dados pessoais" component={ProfileScreen} />
            <Drawer.Screen name="Calendário menstrual" component={CalendarScreen} />
            <Drawer.Screen name="Medicações e consultas" component={AppointmentsScreen} />
            <Drawer.Screen onPress={() => navigation.goBack()} name="Relatórios" component={ReportScreen} />
            <Drawer.Screen name="Perguntas frequentes" component={FAQScreen} />
            <Drawer.Screen name="Clínicas de PMA" component={PMAScreen} />
            <Drawer.Screen name="Sandbox Login" component={Login} />
          </Drawer.Navigator>

        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}