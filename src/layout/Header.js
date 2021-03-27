import React from 'react';
import { Image } from 'react-native';
import { Button, Icon, Header as BaseHeader, Left, Right, Body } from 'native-base';
import { DrawerActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

const LogoImage = require('../../assets/logo.png');

const Header = function() {
    const navigation = useNavigation();

    return (
        <BaseHeader
            style={{
                backgroundColor: '#DAE2F8'
            }}
        >
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.goBack()}
                >
                    <Icon name="arrow-back"></Icon>
                </Button>
            </Left>
            <Body style={{
                alignItems: "center"
            }}>
                <Image
                    square
                    style={{
                        maxHeight: 50,
                        maxWidth: 150,
                        alignSelf: "center",
                    }}
                    source={LogoImage}
                />
            </Body>
            <Right>
                <Button
                    transparent
                    onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
                >
                    <Icon name='menu' />
                </Button>
            </Right>
        </BaseHeader>
    );
}

export default Header;