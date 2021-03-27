import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

const CredentialsSettingsScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <Text>CredentialsSettingsScreen</Text>
            </View>
        </Content>
    </Container>
);

export default CredentialsSettingsScreen;
