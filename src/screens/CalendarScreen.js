import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import Header from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const tpmCalendarIcon = { key: 'tpm', color: '#EE9838', fontSize: 60 }; // raio tpm icon
const heartCalendarIcon = { key: 'heart', color: '#F0668C', fontSize: 60 }; //source={ //require('https://upload.wikimedia.org/wikipedia/commons/c/c8/Love_Heart_symbol.svg') } }; // relao sexual




const CalendarScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <View style={styles.container}>
                    <FontAwesome name="calendar" style={styles.dateIcon} />
                    <Text style={styles.dateMonth}>Abril</Text>
                    <Text style={styles.dateYear}>2021</Text>
                    <Text style={styles.dateCicle}>INÍCIO DO CICLO: 01/02/2021</Text>

                </View>
                <CalendarList
                    markingType={'custom'}
                    theme={{
                        calendarBackground: "#EDEDED",
                        monthTextColor: "#EDEDED",
                        textSectionTitleColor: "#000000"


                    }}
                    horizontal={true}
                    pagingEnabled={true}
                    markedDates={{
                        "2021-04-06": {
                            customStyles: {
                                container: {
                                    borderBottomEndRadius: 0,
                                    borderColor: "#EEBCCD",
                                    borderRadius: 3,
                                    borderBottomWidth: 4
                                },
                                selected: true
                            }
                        },
                        "2021-04-07": {
                            customStyles: {
                                container: {
                                    borderBottomEndRadius: 0,
                                    borderColor: "#E290AB",
                                    borderRadius: 3,
                                    borderBottomWidth: 4
                                },
                                selected: true
                            }
                        },
                        "2021-04-08": {
                            customStyles: {
                                container: {
                                    borderBottomEndRadius: 0,
                                    borderColor: "#E290AB",
                                    borderRadius: 0,
                                    borderBottomWidth: 4
                                },
                                selected: true
                            }
                        },
                        "2021-04-09": {
                            customStyles: {
                                container: {
                                    borderBottomEndRadius: 0,
                                    borderColor: "#EEBCCD",
                                    borderRadius: 0,
                                    borderBottomWidth: 4
                                },
                                selected: true
                            }
                        },
                        "2021-04-10": {
                            customStyles: {
                                container: {
                                    borderBottomEndRadius: 0,
                                    borderColor: "#EEBCCD",
                                    borderRadius: 0,
                                    borderBottomWidth: 4
                                },
                                selected: true
                            }
                        },
                        //ovulao
                        '2021-04-16': {
                            customStyles: {
                                container: {
                                    borderWidth: 2,
                                    borderStyle: 'dashed',
                                    borderColor: "#4BD1A4",
                                    borderRadius: 20,
                                },
                                text: {
                                    color: "#4BD1A4",
                                },
                                dots: [
                                    { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                    { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                ],
                                selected: true
                            }
                        },
                        '2021-04-13': {
                            customStyles: {
                                container: {

                                },
                                text: {
                                    color: "#4BD1A4",
                                },
                                dots: [
                                    { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                    { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                ],
                                selected: true
                            }
                        },
                        '2021-04-14': {
                            customStyles: {
                                container: {

                                },
                                text: {
                                    color: "#4BD1A4",
                                },
                                dots: [
                                    { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                    { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                ],
                                selected: true
                            }
                        },
                        '2021-04-15': {
                            customStyles: {
                                container: {

                                },
                                text: {
                                    color: "#4BD1A4",
                                },
                                dots: [
                                    { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                    { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                ],
                                selected: true
                            }
                        },
                        '2021-04-17': {
                            customStyles: {
                                container: {

                                },
                                text: {
                                    color: "#4BD1A4",
                                },
                                dots: [
                                    { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                    { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                ],
                                selected: true
                            }
                        },
                    }}
                ></CalendarList>
                {/* <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 50 }}>
                    <FontAwesome name="bolt" style={tpmCalendarIcon} />
                    <FontAwesome name="heart" style={heartCalendarIcon} />
                </View> */}
                <View style={styles.containerDown}>

                    <Text style={styles.prediction}>PREVISÕES</Text>

                    <View style={styles.containerBoxPrediction} >

                        <Icon type="FontAwesome" name="spinner" style={styles.icon} />
                        <Text style={styles.daysPrediction} >Dias</Text>
                        <Icon type="FontAwesome" name="ellipsis-h" style={styles.icon} />



                    </View>
                    <View style={styles.containerBoxPrediction}>

                        <Text style={styles.boxPrediction} >OVULAÇÃO</Text>

                        <Text style={styles.boxPrediction}>PERÍODO FÉRTIL</Text>

                        <Text style={styles.boxPrediction}>PRÓXIMA MENSTRUAÇÃO</Text>


                    </View>
                    <Text style={styles.titleSymptoms}>ADICIONAR SINTOMA</Text>

                    <View style={styles.containerBoxSymptoms} >

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="heart" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>SEXO SEM PROTEÇÃO</Text>
                        </TouchableOpacity>


                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="heart" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>SEXO COM PROTEÇÃO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="tint" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>SECREÇÃO TRANSPARENTE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="circle" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>MAMAS SENSÍVEIS</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="circle" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>FLUXO NORMAL</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="circle" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>POUCO FLUXO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttonSymptoms}>
                            <Icon type="FontAwesome" name="circle" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>SPOTTING</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonSymptoms}>

                            <Icon type="FontAwesome" name="bolt" style={styles.iconSymptoms} />
                            <Text style={styles.boxSymptoms}>CÓLICA</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginVertical: 10
    },
    dateIcon: {
        top: 4,
        fontWeight: "bold",
        color: "#A92257",
        marginHorizontal: 10,
        fontSize: 16,
        width: 20
    },
    dateMonth: {
        fontWeight: "bold",
        color: "#A92257",
        fontSize: 16,
        marginHorizontal: 3,
        width: 55
    },
    dateYear: {
        color: "#A92257",
        fontSize: 16,
        marginHorizontal: 0,
        width: 120
    },
    dateCicle: {
        top: 7,
        fontFamily: 'Arial',
        color: '#666460',
        fontSize: 11,

    },
    containerDown: {
        fontFamily: 'Arial',
        marginTop: 10,
        marginBottom: 5,
    },
    prediction: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#666460',
        textAlign: 'center',
        fontSize: 18,
    },
    containerBoxPrediction: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignContent: 'center',
    },
    daysPrediction: {
        color: 'blue',
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'Arial',
    },

    boxPrediction: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#666460',
        fontSize: 12,
        textAlign: 'center',
        alignItems: "center",
        justifyContent: "center",
    },
    titleSymptoms: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 5,
    },
    buttonSymptoms: {
        borderBottomWidth: 3,
        borderWidth: 0.5,
        borderColor: 'pink',
        alignContent: 'center',
        width: 90,
        height: 80,
        backgroundColor: 'white',
        marginVertical: 3,
        textAlign: 'center',
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",

    },
    containerBoxSymptoms: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        padding: 2,
    },
    boxSymptoms: {
        flexWrap: 'wrap',
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#666460',
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        fontSize: 10,
    },
    iconSymptoms: {

        color: '#A92257',
        alignItems: "center",
        justifyContent: "center",


    },


});

export default CalendarScreen;
