import React from 'react';
import { Container, Content, Text } from 'native-base';
import Header from './layout/Header';

export default function Layout() {
    return (
        <Container>
            <Header />
            <Content>
                <Text>
                    This is Content Section
                </Text>
            </Content>
           <Footer />
        </Container>
    );
}
