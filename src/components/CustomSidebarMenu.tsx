// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Header, Container } from 'native-base';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

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
        </LinearGradient>
      </Header>
      <></>

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props}
          activeTintColor='#A92257'
          inactiveTintColor='#A92257'
          activeBackgroundColor='white'
          labelStyle={styles.label}
          itemStyle={styles.customList} 
          itemsContainerStyle={styles.itemsContainerStyle}
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
  itemsContainerStyle: {

  },
  sideMenuProfileIcon: {
    marginTop: 10,
    height: 40,
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