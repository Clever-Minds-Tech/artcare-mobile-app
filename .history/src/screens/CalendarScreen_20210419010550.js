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

//definição icones do calendario menstrual
//const medicineCalendarIcon = {key:'medicine', color: '#4B67D1', src:"", width:""}; // medicação
const breastCalendarIcon = { key: 'breast', src: "", width: 8, height: 8, position: "" }; //ícone da mama
const breastIcon = { uri: "https://cdn4.iconfinder.com/data/icons/materia-anatomy/24/028_032_tit_boobs_mother_biology_anatomy_medicine-512.png" };
const tpmCalendarIcon = { key: 'tpm', color: '#EE9838', width: 8, height: 8 }; // raio tpm icon
const tpmcolor = '#EE9838';
const secretionCalendarIcon = { key: 'secretion', color: '#67E3EF', width: 8, height: 8 }; // secreção
const heartCalendarIcon = { key: 'heart', color: '#F0668C', width: 8, height: 8 , margin:2}; //source={ //require('https://upload.wikimedia.org/wikipedia/commons/c/c8/Love_Heart_symbol.svg') } }; // relação sexual
const ovulationCalendarIcon = { key: 'ovulation', selectedDotColor: '#4BD1A4' }; //ovulação
const menstruationPredictCalendarIcon = { key: 'predmestruation', color: '#EEBCCD' }; //previsão próxima menstruação
const lessMenstruationCalendarIcon = { key: 'lessmenstruation', selectedDotColor: '#EEBCCD' }; //menstruação fluxo menor
const menstruationCalendarIcon = { key: 'menstruation', selectedDotColor: '#EEBCCD' }; //menstruação fluxo normal
const spottedCalendarIcon = { key: 'spotted', color: "transparent", selectedDotColor: '#E290AB', width: 8, height: 8, margin:1}; //menstruação fluxo normal
const fertilPeriodCalendarIcon = { key: "fertilperiod", color: "#4BD1A4" } //cor da data
const today = { key: "today", fontWeight: 'bold', backgroundColor: 'white' }

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
                    <FontAwesome name="heart" style={heartCalendarIcon}/>

                <View>


                    <CalendarList
                    theme={{
                        //backgroundColor: "#EDEDED",
                        calendarBackground: "#EDEDED",
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
                                        borderBottomColor: "#EEBCCD",
                                        borderBottomWidth: 4,
                                        marginBottom: 30,
                                    },
                                    header: {
                                        fontSize: 36,
                                        alignSelf: 'auto',
                                        color: 'red',
                                    
                                    },
                                   
                                    selected: true
                                }
                            },
                            //ovulação
                            '2021-04-16': {
                                customStyles: {
                                    container: {
                                        borderWidth: 2,
                                        borderStyle: 'dashed',
                                        borderColor: "#4BD1A4",
                                        borderRadius: 20,
                                    },
                                    text: {
                                        // color: "red"
                                    },
                                    dots: [
                                        { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                        { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                    ],
                                    selected: true
                                }
                            },

                            //dots: criar um "dots" de três pontos para menstruationPredictCalendarIcon
                            '2021-04-13': {
                                customStyles: {
                                    container: {

                                    },
                                    text: {
 //                                       color: "#EEBCCD",
                                        fontWeight: "bold"
                                    },
                                    dots: [
                                        { key: 'menstruation', color: "blue", selectedDotColor: 'white' },
                                        { key: 'blue', color: "red", selectedDotColor: 'blue' },
                                    ],
                                    selected: true
                                }
                            },
                            "2021-04-18": {
                                customStyles: {
                                    container: {

                                    },
                                    text: {

                                    },
                                    dots: [],
                                    selected: true
                                }
                            },


                            //   {selected: true, marked: true, dots: [menstruationPredictCalendarIcon, menstruationPredictCalendarIcon, menstruationPredictCalendarIcon], activeOpacity: 0},
                            /*   '2021-04-15': { selected: true, marked: true, selectedColor: 'blue' , activeOpacity: 0},
                               '2021-04-13': { marked: true },
                               '2021-04-12': { marked: true, dotColor: 'red', activeOpacity: 0 },
                               '2021-04-14': { disabled: true, disableTouchEvent: true, activeOpacity: 0 }*/
                               }}
                        markingType={'custom'}
                    > </CalendarList>

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
                    />
                </View>
            </Content>
        </Container>
    );

export default CalendarScreen;

