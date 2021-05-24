import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Icon, Accordion } from 'native-base';
import Header from '../layout/Header';
import { block } from 'react-native-reanimated';

const questionList = require('../apis/faq.json');

const FAQScreen = ({
    params,
}) => {
    const [activeIndex, setActiveIndex] = useState(2)
    const [questions, setQuestions] = useState([])

    const openAnswer = (index) => {
        console.log(index)
        setActiveIndex(index)

    }

    useEffect(() => {
        loadData();
      }, []);
    
    
     const loadData = async () => {
        const response = await fetch(`https://mirthartcare.virtualcare.pt/artcare/FAQ/`);
        const data = await response.json();
        const foo5 = Object.values(data.INFO)
        let items = [];
        foo5.map((item) => {
            let faqItem = {
                question: item.PERGUNTA,
                answer: item.RESPOSTA
            };

            items.push(faqItem);
        })

        setQuestions(items)
      }

    return (
        <Container>
            <Header />
            <Content>
                <View style={styles.container}>
                    <Text style={styles.textData}>
                        PERGUNTAS FREQUENTES
                   </Text>
                    {   
                        questions.map((item, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <Text onPress={() => openAnswer(index)} style={styles.textQuestion}>{item.question}</Text>
                                    
                                    <Icon type="FontAwesome" name="chevron-right" style={styles.iconChevron} onPress={() => openAnswer(index)}/>
                                    
                                    { activeIndex === index &&
                                        <Text className='answerActive'>{item.answer}</Text>
                                    }
                                </React.Fragment>
                            )
                        })
                    }

                </View>
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        fontFamily: 'Arial',
        fontWeight: 'bold',
    },
    textData: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 23,
        textDecorationStyle: "solid",
    },
    textQuestion: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 40,
        marginLeft: 35,
        marginRight: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '85%',
        fontSize: 20,
        borderColor: '#EDEDED',
        color: '#A92257',
        borderBottomWidth: 4,
        borderRadius: 10,
        textAlign: 'left',
        paddingBottom: 4,
    },
    iconChevron: {
        flex: 1,
        flexDirection: 'row',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        fontSize: 20,
        marginLeft: 17,
        marginTop: -27,
        alignContent: 'center'
    },
})

export default FAQScreen;
