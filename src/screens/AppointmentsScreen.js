import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import Header from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import HorizontalPill from '../components/HorizontalPill';




const AppointmentsScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                <Text style={styles.textData}>MEDICAÇÃO E CONSULTAS</Text>
                <View style={styles.container}>
                    <FontAwesome name="calendar" style={styles.dateIcon} />
                    <Text style={styles.dateMonth}>Abril</Text>
                    <Text style={styles.dateYear}>2021</Text>
                    <Text style={styles.dateCicle}>INÍCIO DO CICLO: 01/02/2021</Text>

                </View>

                <Agenda>
                </Agenda>
                <View style={styles.boxMedication}>
                    <View style={styles.dateBox}>
                        <Text style={styles.date}>
                            09/02/2021
                    </Text>
                        <Text style={styles.day}>
                            | Terça-feira
                    </Text>

                    </View>
                    <View>
                        <HorizontalPill style={styles.horizontalPill}></HorizontalPill>
                        <Text style={styles.medication}>
                            MEDICAÇÕES
                    </Text>
                        <Text style={styles.medicationDay}>
                            Bemfola 225 UI 1 x dia
                    </Text>
                        <Text style={styles.note}>
                            Observações sobre a utilização do medicamento
                    </Text>
                    </View>
                    <Text style={styles.today}>
                        HOJE
                    </Text>
                    <View style={styles.dateBox}>
                        <Text style={styles.date}>
                            10/02/2021
                    </Text>

                        <Text style={styles.day}>
                            | Quarta-feira
                    </Text>
                    </View>
                    <View>
                        <HorizontalPill style={styles.horizontalPill}></HorizontalPill>
                        <Text style={styles.medication}>
                            MEDICAÇÕES
                    </Text>
                        <Text style={styles.todayMedication}>
                            Bemfola 225 UI 1 x dia
                    </Text>
                        <View style={styles.query}>
                            <Text style={styles.noteTodayMedication}>
                                Observações sobre a utilização do medicamento
                    </Text>
                            <Text>
                                HH:MM
                    </Text>
                        </View>
                    </View>
                    <View style={styles.query}>
                        <Text>
                            CONSULTA
                         </Text>

                        <Text>
                            Consulta com o Dr. Ricardo Santos
                             </Text>
                        <Text>
                            14h30
                             </Text>

                        <Text style={styles.queryDetails}>
                            Ferticare
                    </Text>
                    </View>
                    <View style={styles.dateBox}>
                        <Text style={styles.date}>
                            11/02/2021
                    </Text>
                        <Text style={styles.day}>
                            | Quinta-feira
                    </Text>
                    </View>
                    <View>
                        <HorizontalPill style={styles.horizontalPill}></HorizontalPill>
                        <Text style={styles.medication}>
                            MEDICAÇÕES
                    </Text>
                        <Text style={styles.medicationDay}>
                            Bemfola 225 UI 1 x dia
                    </Text>
                        <Text style={styles.note}>
                            Observações sobre a utilização do medicamento
                    </Text>
                    </View>
                </View>
            </View>
        </Content>
    </Container >
);

const styles = StyleSheet.create({
    textData: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        textAlign: 'center',
        marginTop: 30,
        marginBottom: 20,
        fontSize: 23,
        textDecorationStyle: "solid",
    },
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
    boxMedication: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 30,
        marginRight: 30,
        marginTop: -90,

    },
    dateBox: {
        flex: 1,
        flexDirection: 'row',
    },
    date: {
        fontWeight: "bold",
        fontFamily: 'Arial',
        color: '#4C4D4F',
        fontSize: 14,

    },
    day: {
        fontFamily: 'Arial',
        color: '#4C4D4F',
        fontSize: 14,
        fontWeight: '400',

    },
    medication: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#4B67D1',
        fontSize: 13,
        marginLeft: 25,
        marginTop: -41,
    },
    horizontalPill: {
        marginTop: -15,
        marginLeft: -20,
    },

    medicationDay: {
        fontWeight: "bold",
        fontFamily: 'Arial',
        color: '#4C4D4F',
        fontSize: 14,
        marginTop: 5,
    },
    note: {
        fontFamily: 'Arial',
        color: '#4C4D4F',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 5,
    },
    today: {
        fontWeight: "bold",
        fontFamily: 'Arial',
        color: '#4C4D4F',
        fontSize: 20,
    },
    todayMedication: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#4B67D1',
        fontSize: 13,
    },
    noteTodayMedication: {
        fontFamily: 'Arial',
        fontWeight: '400',
        color: '#4B67D1',
        fontSize: 12,
    },
    query: {
        color: '#E290AB',

    },


});
export default AppointmentsScreen;
