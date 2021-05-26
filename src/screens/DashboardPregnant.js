import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import Header from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import LittleFlow from '../components/LittleFlow';
import Spotting from '../components/Spotting';
import NormalFlow from '../components/NormalFlow';
import DashboardPill from '../components/DashboardPill';
import AddSymptom from '../components/AddSymptom';
import CalendarIcon from '../components/CalendarIcon';
import DashboardPregnant from '../components/DashboardPregnant';
import Baby from '../components/Baby';




const DashboardPregnantScreen = ({
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

                <View style={styles.dashboard}>
                    <DashboardPregnant style={styles.dashboardIcon}></DashboardPregnant>
                    <Baby style={styles.babyIcon}></Baby>
                    <Text style={styles.textUp}>
                        GRÁVIDA HÁ
                    </Text>
                    <Text style={styles.weeksNumber}>
                        23
                    </Text>
                    <Text style={styles.weeks}>
                        semanas
                    </Text>
                    <Text style={styles.days}>
                        e 4 dias
                    </Text>
                    <Text style={styles.textDown}>
                        Data provável do parto
                    </Text>
                    <Text style={styles.date}>
                        08/11/21
                    </Text>


                </View>

                <View style={styles.rowIcons}>

                    <TouchableOpacity >
                        <CalendarIcon style={styles.calendarIcon} ></CalendarIcon>
                        <Text style={styles.textLegend}>CALENDÁRIO{"\n"}
                        MENSTRUAL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <DashboardPill style={styles.pill} ></DashboardPill>
                        <Text style={styles.textLegendPill}>MEDICAÇÃO E{"\n"}
                        CONSULTAS</Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <AddSymptom style={styles.addSymptom} ></AddSymptom>
                        <Text style={styles.textLegend}>ADICIONAR{"\n"}
                        SINTOMAS</Text>
                    </TouchableOpacity>
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
    dashboard: {
        flex: 1,

    },
    babyIcon: {
        marginTop: -320,
        marginLeft: 160,
    },
    textUp: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: '#59ac7f',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 15,
        marginBottom: 5,

    },
    weeksNumber: {
        color: '#2b9936',
        fontFamily: 'Arial',
        fontWeight: "bold",
        textAlign: 'center',
        fontSize: 40,
        marginTop: -10,

    },
    weeks: {
        color: '#2b9936',
        fontFamily: 'Arial',
        fontWeight: "bold",
        textAlign: 'center',
        marginTop: -20,
        fontSize: 40,
    },

    days: {
        fontFamily: 'Arial',
        color: '#2b9936',
        fontSize: 30,
        marginLeft: 145,
        marginTop: -10,
        marginBottom: 5,


    },
    textDown: {
        fontFamily: 'Arial',

        marginLeft: 135,

        fontSize: 13,
        color: '#2b9936',
        textAlign: 'left',

    },
    date: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        marginTop: -5,
        marginBottom: 80,
        marginLeft: 175,
        fontSize: 12,
        color: '#2b9936',

    },
    dashboardIcon: {
        flex: 1,
        marginLeft: -55,
        marginTop: -150,
        marginBottom: -90,
    },
    rowIcons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: -20,
        marginLeft: 30,
        marginRight: 20,


    },
    calendarIcon: {


    },
    pill: {
        marginLeft: 8,
        marginTop: 3,
        marginBottom: -3,


    },
    addSymptom: {
        marginTop: 15,
        marginBottom: 5,


    },
    textLegend: {
        fontFamily: 'Arial',
        marginTop: -25,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#A92257',
        fontSize: 12,


    },
    textLegendPill: {
        flex: 1,
        marginLeft: 15,
        textAlign: 'center',
        fontFamily: 'Arial',
        marginTop: -25,
        fontFamily: 'Arial',
        fontWeight: 'bold',

        color: '#4B67D1',
        fontSize: 12,

    }




});
export default DashboardPregnantScreen;
