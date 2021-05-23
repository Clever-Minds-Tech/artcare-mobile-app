import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';



import * as Linking from 'expo-linking';

Linking.openURL('https://expo.io');


const ReportScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <Text>ReportScreen </Text>
            </View>
        </Content>
    </Container>
);

export default ReportScreen;
