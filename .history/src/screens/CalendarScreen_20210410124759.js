import React from 'react';
import { Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const medicineCalendarIcon = {key:'medicine', color: '#4B67D1', src:"", width:""}; // medicação
const breastCalendarIcon = {key:'breast', color: 'blue', selectedDotColor: 'blue'}; //mama
const tpmCalendarIcon = {key:'tpm', color: 'green'}; // raio tpm icon
const secretionCalendarIcon = {key:'tpm', color: 'green'}; // secreção
const heartCalendarIcon = {key:'tpm', color: '#F0668C'}; // relação sexual
const ovulationCalendarIcon = {key:'tpm', color: 'green'}; //ovulação

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

                    > </CalendarList>


                    <Calendar
                        markedDates={{
                            '2021-04-15': { selected: true, marked: true, selectedColor: 'blue' },
                            '2021-04-13': { marked: true },
                            '2021-04-12': { marked: true, dotColor: 'red', activeOpacity: 0 },
                            '2021-04-14': { disabled: true, disableTouchEvent: true }
                        }}
                        markingType={'multi-dot'}
                    ></Calendar>
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
