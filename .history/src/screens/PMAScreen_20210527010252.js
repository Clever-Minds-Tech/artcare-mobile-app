import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Icon, Accordion } from 'native-base';
import Header from '../layout/Header';
import { block } from 'react-native-reanimated';

const PMAScreen = ({
    params,
}) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const [questions, setQuestions] = useState([])

    const openAnswer = (index) => {
        if (index != activeIndex) {
            setActiveIndex(index)
        } else {
            setActiveIndex(-1)
        }
        console.log(index)


    }

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await fetch(`https://mirthartcare.virtualcare.pt/artcare/CENTROSPMA/`);
        const data = await response.json();
        const foo5 = Object.values(data.INFO)
        let items = [];
        foo5.map((item) => {
            let faqItem = {
                question: item.SIGLA,
                answer: item.DESCRICAO,
                corpo: item.CORPO_CLINICO,
                morada: item.MORADA,
                contact: item.CONTATOS

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
                        CLÍNICAS DE PMA
                   </Text>
                    <Text style={styles.baseText}>
                        <Text style={styles.titleText} >
                            Algum texto
                            {"\\n"}
                            {'\\n'}
                        </Text>
                        <Text numberOfLines={5}>outro outro outro texto</Text>
                    </Text>
                    {


                        questions.map((item, index) => {
                            return (
                                <View style={styles.boxQuestion}>
                                    <Text style={styles.pmaTitle}>
                                        {item.question} - {item.answer} {"\n"}
                                    </Text>
                                    <Text style={styles.pmaDescription}> {item.corpo}  </Text>

                                </View>
                                /*
                                <React.Fragment key={index}>

                                    <View style={styles.boxQuestion}>
                                        <Icon type="FontAwesome" name="chevron-right" style={styles.iconChevron} onPress={() => openAnswer(index)} />
                                        <Text onPress={() => openAnswer(index)} style={styles.textQuestion}>{item.question}</Text>
                                    </View>


                                    { activeIndex === index &&
                                        <View style={styles.answerBox}>

                                            <Text style={styles.answerText} className='answerActive'>{item.answer}</Text>
                                        </View>

                                    }
                                </React.Fragment> */
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
        marginBottom: 50,
    },
    boxQuestion: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 35,
        marginRight: 35,
        borderColor: '#EDEDED',
        borderBottomWidth: 4,
        borderRadius: 10,
        alignContent: 'center',
        padding: 1,
    },
    textQuestion: {
        marginLeft: 2,
        marginBottom: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#A92257',
        textAlign: 'left',
        marginTop: -15,
    },
    iconChevron: {
        fontFamily: 'Arial',
        color: '#A92257',
        fontSize: 20,
        alignContent: 'center',
        marginTop: -8,
        marginLeft: -13,
    },
    answerText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 45,
        fontFamily: 'Arial',
        fontSize: 14,
        textAlign: 'left',
        marginTop: 10,
        marginBottom: 10,
    },
    answerBox: {
        backgroundColor: '#EDEDED',
        marginTop: 30,
    },
    pmaTitle: {
        flex: 1,
        flexDirection: 'row',
        fontWeight: 'bold'
    },
    pmaDescription: {
        flex: 1,
        flexDirection: 'row'
    },
    baseText: {
        fontFamily: 'Cochin',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },

})

export default PMAScreen;
