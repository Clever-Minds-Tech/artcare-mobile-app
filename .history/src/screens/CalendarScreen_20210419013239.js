import React from 'react';
import { Text, View, ImageBackground, StyleSheet, } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
//<FontAwesome  name={'fa-newspaper-o'} color={"black"} />
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

//<FontAwesome name={'newspaper-o'} />
/*
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
/*
<Image
    source={{ uri: 'app_icon' ,
    cache: 'only-if-cached'
    }}
  style={{ width: 40, height: 40 }}
  
/>
 */

function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : (b ? b : a)
    }
  }
//defini??o icones do calendario menstrual
//const medicineCalendarIcon = {key:'medicine', color: '#4B67D1', src:"", width:""}; // medica??o
const breastCalendarIcon = { key: 'breast', src: "", width: 12, height: 12, position: "" }; //?cone da mama
const breastIcon = { uri: "https://cdn4.iconfinder.com/data/icons/materia-anatomy/24/028_032_tit_boobs_mother_biology_anatomy_medicine-512.png" };
const tpmCalendarIcon = { key: 'tpm', color: '#EE9838', width: 12, height: 8 }; // raio tpm icon
const tpmcolor = '#EE9838';
const secretionCalendarIcon = { key: 'secretion', color: '#67E3EF', width: 12, height: 8 }; // secre??o
const heartCalendarIcon = { key: 'heart', color: '#F0668C', width: 12, height: 12, margin: 2 }; //source={ //require('https://upload.wikimedia.org/wikipedia/commons/c/c8/Love_Heart_symbol.svg') } }; // rela??o sexual
const ovulationCalendarIcon = { key: 'ovulation', selectedDotColor: '#4BD1A4' }; //ovula??o
const menstruationPredictCalendarIcon = { key: 'predmestruation', color: '#EEBCCD' }; //previs?o pr?xima menstrua??o
const lessMenstruationCalendarIcon = { key: 'lessmenstruation', selectedDotColor: '#EEBCCD' }; //menstrua??o fluxo menor
const menstruationCalendarIcon = { key: 'menstruation', selectedDotColor: '#EEBCCD' }; //menstrua??o fluxo normal
const spottedCalendarIcon = { key: 'spotted', color: "transparent", selectedDotColor: '#E290AB', width: 12, height: 12, margin: 1 }; //menstrua??o fluxo normal
const fertilPeriodCalendarIcon = { key: "fertilperiod", color: "#4BD1A4" } //cor da data
const today = { key: "today", fontWeight: 'bold', backgroundColor: 'white' }
const monthTitle = {key: "monthTitle", fontWeight: "bold", color:"#A92257", margin:10, fontSize:16, align: left}

export const customImage = {
    container: {
        position: 'absolute',
    },
};



const CalendarScreen = ({
    params,
}) => (
        <Container>

            <Header />
            <Content>
                <FontAwesome name="bolt" style={tpmCalendarIcon} />
                <ImageBackground source={breastIcon} style={breastCalendarIcon}></ImageBackground>
                <Entypo name="drop" style={secretionCalendarIcon} />
                <FontAwesome name="heart" style={heartCalendarIcon} />

                <View>
                    <Text style={monthTitle}>
                    <FontAwesome name="calendar" style={monthTitle} />
                        Abril
                        <Text> 2021</Text>
                        </Text>

                    <CalendarList
                        markingType={'custom'}
                        theme={{
                            //backgroundColor: "#EDEDED",
                            calendarBackground: "#EDEDED",
                            monthTextColor: "#EDEDED",
                            textSectionTitleColor: "#000000"
                            //   selectedDayBackgroundColor: "#ffffff",
                            

                        }}
                        //                    disabledDaysIndexes={[0, 6]}

                        // Enable horizontal scrolling, default = false
                        horizontal={true}
                        // Enable paging on horizontal, default = false
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
                                    text: {
                                        // color: "red"
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
                                    text: {
                                        // color: "red"
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
                                    text: {
                                        // color: "red"
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
                                    text: {
                                        // color: "red"
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
                                    text: {
                                        // color: "red"
                                    },

                                    selected: true
                                }
                            },
                            //ovula??o
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
                    > </CalendarList>
                    {/* 
                    <Calendar
                        // Collection of dates that have to be colored in a special way. Default = {}
                        markedDates={{
                            '2021-04-12': { textColor: 'green' },
                            '2021-04-13': { startingDay: true, color: 'green' },
                            '2021-04-14': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                            '2021-04-15': { disabled: true, startingDay: true, color: 'green', endingDay: true }
                        }}
                        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        markingType={'custom'}
                    />
                    <Calendar
                        markedDates={{
                            '2021-04-12': {
                                periods: [
                                    { startingDay: false, endingDay: true, color: '#5f9ea0' },
                                    { startingDay: false, endingDay: true, color: '#ffa500' },
                                    { startingDay: true, endingDay: false, color: '#f0e68c' }
                                ]
                            },
                            '2021-04-13': {
                                periods: [
                                    { startingDay: true, endingDay: false, color: '#ffa500' },
                                    { color: 'transparent' },
                                    { startingDay: false, endingDay: false, color: '#f0e68c' },
                                    { marked: true, dotColor: '#50cebb' }
                                ]
                            }

                        }}
                        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        markingType='multi-period'

                    />
                    <Calendar
                        markingType={'period'}

                        markedDates={{
                            '2021-04-12': { marked: true, dotColor: '#50cebb' },
                            '2021-04-13': { marked: true, dotColor: '#50cebb' },

                            '2021-04-15': { color: '#70d7c7', textColor: 'white' },
                            '2021-04-16': { color: '#70d7c7', textColor: 'white', marked: true, dotColor: 'white' },
                            '2021-04-17': { color: '#70d7c7', textColor: 'white' },
                            '2021-04-18': { endingDay: true, color: '#50cebb', textColor: 'white' },
                        }}
                    /> */}
                </View>
            </Content>
        </Container>
    );

export default CalendarScreen;

