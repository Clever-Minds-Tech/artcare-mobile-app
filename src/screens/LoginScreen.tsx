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
                        style={styles.inputBox}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                        placeholder='PALAVRA-PASSE'
                        placeholderTextColor="#D4956E"
                        textAlign='left'
                        secureTextEntry={true}
                    />
                    <TouchableOpacity style={styles.buttonEntry} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonCreate} onPress={this.handleLogin}>
                        <Text style={styles.buttonText}>Criar Conta</Text>
                    </TouchableOpacity>


                    <Text style={styles.textLogin}>Qualquer acesso não autorizado aos conteúdos desta</Text>
                    <Text style={styles.textLogin}>aplicação viola o direito à privacidade dos indivíduos cuja</Text>
                    <Text style={styles.textLogin}>informação aqui se encontra disponível, e sera passível das</Text>
                    <Text style={styles.textLogin}>respetivas ações legais e disciplinares.</Text>

                    <Text style={styles.textLogin}>Todo o profissional de saúde deve também estar consciente</Text>
                    <Text style={styles.textLogin}>da confidencialidade de toda a informação clínica e que se</Text>
                    <Text style={styles.textLogin}>encontra vinculado ao sigilo profissional.</Text>


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
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 100,
        paddingTop: 30
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d1d2d3',
        borderBottomWidth: 1,
        textAlign: 'right',
        color: 'black'
    },
    buttonEntry: {
        marginTop: 30,
        marginBottom: 10,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#A92257',

        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
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
        marginTop: 3,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#D14C79',

        borderRadius: 5,
        width: 200

    },
    textLogin: {
        alignItems: 'center',
        textAlign: 'center',
    },
    textLoginUpper: {
        color: '#A92257',
        textAlign: 'center',
    },
    logo: {
        display: 'flex',
        flexDirection: "column",
        maxHeight: 100,
        maxWidth: 100,
        alignItems: 'center',
        justifyContent: 'center'

    }

})

export default Login