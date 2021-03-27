import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

const CalendarScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <Text> CalendarScreen </Text>
            </View>
        </Content>
    </Container>
);

export default CalendarScreen;
