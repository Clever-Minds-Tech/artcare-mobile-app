import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

const questionList = require('../apis/faq.json');

const FAQScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                {
                    questionList.items.map(item => {
                        return (
                            <>
                                <Text>{item.question}</Text>
                                <Text>{item.answer}</Text>
                            </>
                        )
                    })
                }
                <Text>FAQScreen </Text>
            </View>
        </Content>
    </Container>
);

export default FAQScreen;
