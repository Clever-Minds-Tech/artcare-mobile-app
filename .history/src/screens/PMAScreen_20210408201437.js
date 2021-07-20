import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

const PMAScreen = ({
    params,
}) => {
    return (
        <Container>
            <Header />
            <Content>
                <View>
                    <Text> PMAScreen </Text>
                </View>
            </Content>
        </Container>
    )
}

export default PMAScreen;
