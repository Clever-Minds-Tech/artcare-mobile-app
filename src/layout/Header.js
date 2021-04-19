import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Icon, Header as BaseHeader, Left, Right, Body } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient'

const LogoImage = require('../../assets/logo.png');

const Header = function () {
    const navigation = useNavigation();

    return (
        <BaseHeader style={{
            backgroundColor: 'white'
        }}
        >
            <LinearGradient start={{ x: 0, y: -1.4 }} end={{ x: 0, y: 0.2 }}
                colors={['#A92257', 'white']}
                style={styles.background}
            ></LinearGradient>
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back" style={styles.iconArrow}></Icon>
                </Button>
            </Left>
            <Body style={{
                alignItems: "center"
            }}>
                <Image
                    square
                    style={{
                        flex: 1,
                        left: 40,
                        justifyContent: 'center',
                        marginTop: 10,
                        height: 40,
                        width: '100%',
                        resizeMode: 'contain',
                        alignContent: 'center'
                    }}
                    source={LogoImage}
                />
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Icon name='menu' style={styles.iconMenu} />
                </Button>
            </Right>
        </BaseHeader>
    );
}
const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,

    },
    iconArrow: {
        color: '#eeceee',
        fontSize: 40,

    },
    iconMenu: {
        fontWeight: 'bold',

        color: '#A92257',
        fontSize: 30,
        borderRadius: 55
    }
});

export default Header;