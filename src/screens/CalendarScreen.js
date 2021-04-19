import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Content, Icon } from 'native-base';
import Header from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const tpmCalendarIcon = { key: 'tpm', color: '#EE9838', fontSize: 60 }; // raio tpm icon
const heartCalendarIcon = { key: 'heart', color: '#F0668C', fontSize: 60 }; //source={ //require('https://upload.wikimedia.org/wikipedia/commons/c/c8/Love_Heart_symbol.svg') } }; // relao sexual


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
        fontWeight: "bold", 
        color: "#A92257", 
        fontSize: 16,
        marginHorizontal: 0, 
        width: 120
    }
});

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
                                    borderRadius: 0,
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
                                    borderRadius: 0,
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
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', marginTop: 50}}>
                    <FontAwesome name="bolt" style={tpmCalendarIcon} />
                    <FontAwesome name="heart" style={heartCalendarIcon} />
                </View>
            </View>
        </Content>
    </Container>
);

export default CalendarScreen;
