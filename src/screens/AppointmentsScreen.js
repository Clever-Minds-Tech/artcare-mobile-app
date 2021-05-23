import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import Header from '../layout/Header';
import { FontAwesome } from '@expo/vector-icons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';



const CircleImage = require('../../assets/dashboardGray.svg');
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
                <View style={styles.dashboard}>
                    <Image style={styles.circleImage}
                        source={CircleImage}
                    />

                </View>
            </View>
        </Content>
    </Container>
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
    dashboard: {

    },
    circleImage: {
        fontSize: 20,
    },
});
export default AppointmentsScreen;
