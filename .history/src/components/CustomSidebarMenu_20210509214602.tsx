// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
  SafeAreaView,
  StyleSheet,
  Image,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Header, Icon, Left, Right, Button } from 'native-base';
import { Linking } from 'react-native';



const CustomSidebarMenu = (props) => {
  return (
    <SafeAreaView style={styles.container} >
      <Header style={
        {
          marginBottom: 75
        }
      }>
        <LinearGradient start={{ x: 0, y: -1.2 }} end={{ x: 0, y: 0.2 }}
          colors={['#A92257', 'white']}
          style={styles.background}
        >
          <Image
            source={require('./../../assets/logo.png')}
            style={styles.sideMenuProfileIcon}
          />
          <Left>
            <Button
              transparent
            // onPress={() => navigation.goBack()}
            >
              <Icon name="close" style={styles.iconClose} />
            </Button>
          </Left>
        </LinearGradient>
      </Header>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}
          activeTintColor='#A92257'
          inactiveTintColor='#A92257'
          activeBackgroundColor='white'
          labelStyle={styles.label}
          itemStyle={styles.customList} 
        />
        <DrawerItem
          label="Relatórios"
          activeTintColor='#A92257'
          inactiveTintColor='#A92257'
          activeBackgroundColor='white'
          labelStyle={styles.label}
          
          onPress={() => Linking.openURL('http://www.example.com')}
        />
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Arial',
    width: '100%',
    textAlign: 'center'
  },
  label: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 2,
    marginBottom: 7,
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    left: 20
  },
  iconClose: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 330,
    fontFamily: 'Arial',
    color: '#A92257',
    fontSize: 40,
    fontWeight: 'bold',
    borderRadius: 80,
    top: -48,
    position: 'relative',
    backgroundColor: 'transparent',
  },
  sideMenuProfileIcon: {
    marginTop: 10,
    height: 50,
    width: '100%',
    resizeMode: 'contain',
    alignContent: 'center',
  },
  customList: {
    flex: 1,
    flexDirection: 'column',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    width: '85%',
    borderColor: '#EDEDED',
    borderBottomWidth: 4,
    alignContent: 'center',
    left: 20
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  }
});

export default CustomSidebarMenu;