import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

export default function ProfileScreen() {
    return (
        <Container>
            <Header title="Profile" />
            <Content>
                <View>
                    <Text>ProfileScreen </Text>
                </View>
            </Content>
        </Container>
    );
}