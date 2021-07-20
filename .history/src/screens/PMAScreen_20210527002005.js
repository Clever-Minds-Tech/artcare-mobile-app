import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Icon, Accordion } from 'native-base';
import Header from '../layout/Header';
import { block } from 'react-native-reanimated';

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
