import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, Image } from 'react-native'
import Firebase from '../../config/Firebase'
import { LinearGradient } from 'expo-linear-gradient'

const LogoImage = require('../../assets/logo.png');

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleLogin = () => {

        const { email, password } = this.state

        Firebase.auth()
            .signInWithEmailAndPassword(email, password)
            .then(result => console.log(result))
            .catch(error => console.log(error))
    }

    render() {
        return (
            <View style={styles.container}>
                <LinearGradient start={{ x: 0, y: -4 }} end={{ x: 0, y: 1 }}
                    colors={['#A92257', 'white']}
                    style={styles.background}
                >
                    <Image style={styles.logo}
                        source={LogoImage}
                    />

                    <TextInput
                        style={styles.inputBox}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                        placeholder='EMAIL'
                        placeholderTextColor="#D4956E"
                        textAlign='left'
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.inputBoxPassword}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder='PALAVRA-PASSE'
                        placeholderTextColor="#D4956E"
                        textAlign='left'
                        secureTextEntry={true}
                        ref={ref => ref && ref.setNativeProps({ style: { fontFamily: 'Arial' } })}


                    />
                    <TouchableOpacity style={styles.buttonEntry} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCreate} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>


                    <Text style={styles.textLogin}>Qualquer acesso não autorizado aos conteúdos desta
                    aplicação viola o direito à privacidade dos indivíduos cuja
                    informação aqui se encontra disponível, e sera passível das
                   respetivas ações legais e disciplinares.</Text>

                    <Text style={styles.textLogin}>Todo o profissional de saúde deve também estar consciente
                    da confidencialidade de toda a informação clínica e que se
                  encontra vinculado ao sigilo profissional.</Text>


                    <Text style={styles.textLoginUpper}>TODOS OS ACESSOS, AUTORIZADOS OU NÃO, ASSIM COMO A NATUREZA DA INFORMAÇÃO ACEDIDA, SERÃO REGISTADOS.</Text>
                </LinearGradient>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        height: 100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',

        overflow: 'hidden',

    },
    logo: {
        marginTop: 95,
        height: 120,
        width: '100%',
        resizeMode: 'contain',
        alignContent: 'center'

    },
    inputBox: {
        marginTop: 40,
        marginLeft: 35,
        marginRight: 35,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '85%',
        fontSize: 11,
        borderColor: '#d1d2d3',
        borderBottomWidth: 2,
        textAlign: 'right',
        paddingBottom: 3,
        color: 'black'
    },
    inputBoxPassword: {
        marginTop: 35,
        marginLeft: 35,
        marginRight: 35,
        paddingBottom: 3,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        width: '85%',
        margin: 10,
        fontSize: 11,
        borderColor: '#d1d2d3',
        borderBottomWidth: 2,
        textAlign: 'right',
        color: 'black',


    },
    buttonEntry: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 30,
        marginBottom: 10,
        paddingVertical: 5,
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
    buttonCreate: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 8,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#D14C79',
        borderRadius: 8,
        width: 330,
        height: 45,
        justifyContent: 'center',
        shadowColor: 'blue',
        shadowOpacity: 10,
        shadowOffset: { width: 30, height: 30 }

    },
    textLogin: {
        marginLeft: 35,
        marginRight: 35,
        marginTop: 12,
        fontSize: 12,
        color: '#4E4E50',
        alignItems: 'center',
        textAlign: 'center',
        fontFamily: 'Arial',
        textAlignVertical: 'center',
        fontWeight: '100',
        padding: 2,



    },
    textLoginUpper: {
        marginLeft: 70,
        marginRight: 70,
        marginTop: 30,
        color: '#A92257',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 10,
        fontFamily: 'Arial',

    }

})

export default Login