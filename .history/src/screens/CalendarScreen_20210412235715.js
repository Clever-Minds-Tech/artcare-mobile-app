import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

/*
<Image
    source={{ uri: 'app_icon' ,
    cache: 'only-if-cached'
    }}
  style={{ width: 40, height: 40 }}
  
/>
 */

//defini??o icones do calendario menstrual
//const medicineCalendarIcon = {key:'medicine', color: '#4B67D1', src:"", width:""}; // medica??o
const breastCalendarIcon = { key: 'breast', src: "", width: 8, height: 8, position: "" }; //?cone da mama
const tpmCalendarIcon = { key: 'tpm', color: '#EE9838', width: 8, height: 8 }; // raio tpm icon
const secretionCalendarIcon = { key: 'secretion', color: '#67E3EF', width: 8, height: 8 }; // secre??o
const heartCalendarIcon = { key: 'heart', color: '#F0668C', width: 8, height: 8 }; //source={ //require('https://upload.wikimedia.org/wikipedia/commons/c/c8/Love_Heart_symbol.svg') } }; // rela??o sexual
const ovulationCalendarIcon = { key: 'ovulation', selectedDotColor: '#4BD1A4' }; //ovula??o
const menstruationPredictCalendarIcon = { key: 'predmestruation', color: '#EEBCCD' }; //previs?o pr?xima menstrua??o
const lessMenstruationCalendarIcon = { key: 'lessmenstruation', selectedDotColor: '#EEBCCD' }; //menstrua??o fluxo menor
const menstruationCalendarIcon = { key: 'menstruation', selectedDotColor: '#EEBCCD' }; //menstrua??o fluxo normal
const spottedCalendarIcon = { key: 'spotted', color: "transparent", selectedDotColor: '#E290AB', width: 8, height: 8, }; //menstrua??o fluxo normal
const fertilPeriodCalendarIcon = { key: "fertilperiod", color: "#4BD1A4" } //cor da data
const today = { key: "today", fontWeight: 'bold', backgroundColor: 'white' }

const CalendarScreen = ({
    params,
}) => (
        <Container>
            <Header />
            <Content>
                <View>
                    <CalendarList
                        // Enable horizontal scrolling, default = false
                        horizontal={true}
                        // Enable paging on horizontal, default = false
                        pagingEnabled={true}
                        markedDates={{
                            //dots: criar um "dots" de tr?s pontos para menstruationPredictCalendarIcon
                            '2021-04-16': { dots: [menstruationPredictCalendarIcon, menstruationPredictCalendarIcon, menstruationPredictCalendarIcon], selected: true, marked: true, selectedColor: 'blue' },
                            '2021-04-15': { selected: true, marked: true, selectedColor: 'blue' },
                            '2021-04-13': { marked: true },
                            '2021-04-12': { marked: true, dotColor: 'red', activeOpacity: 0 },
                            '2021-04-14': { disabled: true, disableTouchEvent: true }
                        }}
                        markingType={'multi-dot'}

                        // Collection of dates that have to be colored in a special way. Default = {}
                        markedDates={{
                            '2021-04-12': { textColor: 'green' },
                            '2021-04-13': { startingDay: true, color: 'green' },
                            '2021-04-14': { selected: true, endingDay: true, color: 'green', textColor: 'gray' },
                            '2021-04-15': { disabled: true, startingDay: true, color: 'green', endingDay: true }
                        }}
                        // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
                        markingType={'period'}



                        
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
                        markingType={'period'}
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
                                    { startingDay: false, endingDay: false, color: '#f0e68c' }
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
                            '2021-04-14': { startingDay: true, color: '#50cebb', textColor: 'white' },
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

