import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

const AppointmentsScreen = ({
    params,
}) => (
    <Container>
        <Header/>
        <Content>
            <View>
                <Text>AppointmentsScreen </Text>
            </View>
        </Content>
    </Container>
);

export default AppointmentsScreen;
