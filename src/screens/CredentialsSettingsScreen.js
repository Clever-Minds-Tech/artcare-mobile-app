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
                <Text style={{
                    fontSize: 46,
                    fontFamily: 'Arial'
                }}>CredentialsSettingsScreen</Text>
            </View>
        </Content>
    </Container>
);

export default CredentialsSettingsScreen;
