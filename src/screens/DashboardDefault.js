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
import CircleMenstruation from '../components/CircleMenstruation';
import DashboardDefault from '../components/DashboardDefault';
import PillLittle from '../components/PillLittle';




const DashboardDefaultScreen = ({
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
                    <DashboardDefault style={styles.dashboardIcon}></DashboardDefault >
                    <Text style={styles.numberUp}>
                        6º
                    </Text>
                    <Text style={styles.textUp}>
                        DIA DO {"\n"}CICLO
                    </Text>
                    <Text style={styles.textUpLittle}>
                        O ciclo durou XX dias
                    </Text>
                    <Text style={styles.textCenter}>
                        BAIXA PROBABILIDADE {"\n"} DE ENGRAVIDAR
                    </Text>
                    <Text style={styles.query}>
                        Consulta hoje às 14h30 {"\n"}(Dr. Ricardo Santos)
                    </Text>
                    <PillLittle style={styles.pillLittle}></PillLittle>
                    <Text style={styles.pillDashboard}>
                        Hoje há 1 medicação
                    </Text>
                    <Text style={styles.numberDown}>
                        8
                    </Text>
                    <Text style={styles.textDown}>
                        dias para a {"\n"}ovulação
                    </Text>
                    <Text style={styles.textDownDetails}>
                        (previsão)
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
    numberUp: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: '#4c4d4f',
        fontSize: 50,
        marginTop: -320,
        marginLeft: 125,

    },
    textUp: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: '#4c4d4f',
        marginLeft: 180,
        marginTop: -55,
        fontSize: 13,
    },
    textUpLittle: {
        fontFamily: 'Arial',
        marginLeft: 180,
        fontSize: 11,
        color: '#4c4d4f',
    },
    textCenter: {
        color: '#A92257',
        fontFamily: 'Arial',
        fontWeight: "bold",
        marginLeft: 20,
        marginTop: 10,
        textAlign: 'center',
        fontSize: 13,
    },
    query: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        color: '#E290AB',
        textAlign: 'center',
        marginLeft: 17,
        marginTop: 10,
    },


    pillLittle: {
        marginLeft: 98,
    },
    pillDashboard: {
        color: '#4B67D1',
        marginTop: -35,
        fontFamily: 'Arial',
        fontWeight: "bold",
        marginLeft: 140,
    },
    numberDown: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        fontSize: 30,
        marginLeft: 148,
        marginTop: 20,
        color: '#4BD1A4',

    },
    textDown: {
        fontFamily: 'Arial',
        fontWeight: "bold",
        marginLeft: 175,
        marginTop: -40,
        fontSize: 12,
        color: '#4BD1A4',

    },
    textDownDetails: {
        marginBottom: 100,
        marginLeft: 175,
        fontSize: 10,
        color: '#4BD1A4',

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
export default DashboardDefaultScreen;
