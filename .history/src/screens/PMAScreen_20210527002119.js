import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content, Icon, Accordion } from 'native-base';
import Header from '../layout/Header';
import { block } from 'react-native-reanimated';

const PMAScreen = ({
    params,
}) => {
    const [activeIndex, setActiveIndex] = useState(-1)
    const [questions, setQuestions] = useState([])

    const openAnswer = (index) => {
        if (index != activeIndex) {
            setActiveIndex(index)
        } else {
            setActiveIndex(-1)
        }
        console.log(index)


    }

    useEffect(() => {
        loadData();
    }, []);


export default PMAScreen;
