import React from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity, Button, Image } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
import { Label, Form } from 'native-base';

const CredentialsSettingsScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View style={styles.container}>
                <Text style={styles.textData}>
                    DADOS DE LOGIN
                   </Text>
                <Form>
                    <Label style={styles.inputLabel}>EMAIL</Label>
                    <TextInput
                        style={styles.inputBox}
                        // value={this.state.email}
                        // onChangeText={email => this.setState({ email })}
                        textAlign='right'
                        autoCapitalize='none'
                    />
                    <Label style={styles.inputLabel}>ALTERAR PALAVRA-PASSE</Label>
                    <TextInput
                        style={styles.inputBox}
                        // value={this.state.password}
                        // onChangeText={password => this.setState({ password })}
                        textAlign='right'
                        secureTextEntry={true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                    />
                    <Label style={styles.inputLabel}>VALIDAR NOVA PALAVRA-PASSE</Label>
                    <TextInput
                        style={styles.inputBox}
                        // value={this.state.password}
                        // onChangeText={password => this.setState({ password })}
                        textAlign='right'
                        secureTextEntry={true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}
                    />

                    <Text style={styles.textSinc}>
                        CÓDIGO DE SINCRONIZAÇÃO
                    </Text>
                    <Text style={styles.numberCode}>
                        123 456 789
                        </Text>
                    <TouchableOpacity style={styles.buttonEntry} >
                        <Text style={styles.buttonText}>Gravar</Text>
                    </TouchableOpacity>

                </Form>

            </View>
        </Content>
    </Container>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        fontFamily: 'Arial',
        fontWeight: 'bold',

    },
    textData: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 23,
        textDecorationStyle: "solid",
    },
    inputBox: {
        marginTop: 40,
        marginLeft: 35,
        marginRight: 35,
        marginBottom: -28,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '85%',
        fontSize: 24,
        borderColor: '#d1d2d3',
        color: '#97999b',
        borderBottomWidth: 2,
        textAlign: 'right',
        paddingBottom: 3,
    },

    buttonEntry: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 250,

        alignItems: 'center',
        backgroundColor: '#A92257',
        borderRadius: 8,
        width: 330,
        height: 45,
        justifyContent: 'center',

    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        fontFamily: 'Arial',
        alignContent: 'center'


    },
    buttonSignup: {
        fontSize: 12
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: 300,

    },
    textSinc: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginLeft: 40,
        marginRight: 40,
        color: '#A92257',
        textAlign: 'center',
        marginTop: 80,
        fontSize: 18,

    },
    numberCode: {
        color: '#1370d3',
        fontSize: 38,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        textAlign: 'center',

    },
    inputLabel: {
        position: 'relative',
        top: 65,
        left: 35,
        marginBottom: -1,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 11,
        color: '#D4956E'
    },

})
export default CredentialsSettingsScreen;
