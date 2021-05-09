import React from 'react';
import { Text, View, TextInput, StyleSheet, } from 'react-native';
import { Container, Content, Label, Form, Icon, } from 'native-base';
import Header from '../layout/Header';

export default function ProfileScreen() {
    return (
        <Container>
            <Header title="Profile" />
            <Content>
                <View style={styles.container}>
                    <Text style={styles.textTitle}>DADOS PESSOAIS</Text>
                    <Text style={styles.textInformation}>Dados utilizados e recolhidos pelas clínicas a que estás associada.
                    Ao alterar, poderá escolher as clínicas que serão notificadas.  </Text>
                    <Icon type="FontAwesome" name="info-circle" style={styles.iconInformation} />

                    <Form>
                        <Label style={styles.inputLabel}>NOME</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>DATA DE NASCIMENTO</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>IDADE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>TELEFONE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>TELEMÓVEL</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>Nº UTENTE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>IDENTIFICAÇÃO</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>Nº IDENTIFICAÇÃO</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>Nº CONTRIBUINTE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>SEGURO DE SAÚDE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>Nº SEGURO DE SAÚDE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>MORADA</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>CÓDIGO POSTAL</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Label style={styles.inputLabel}>LOCALIDADE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>NACIONALIDADE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>PAÍS DE RESIDÊNCIA</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>NATURALIDADE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>ESCOLARIDADE</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />
                        <Icon type="FontAwesome" name="chevron-down" style={styles.iconChevron} />
                        <Label style={styles.inputLabel}>PROFISSÃO</Label>
                        <TextInput style={styles.inputBox}
                            textAlign='right' />

                    </Form>
                </View>
            </Content>
        </Container>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: 'hidden',
        fontFamily: 'Arial',
        fontWeight: 'bold',

    },
    textTitle: {
        fontFamily: 'Arial',
        fontWeight: 'bold',
        color: '#A92257',
        textAlign: 'center',
        marginTop: 20,
        fontSize: 23,
        textDecorationStyle: "solid",
    },
    textInformation: {
        fontWeight: 'bold',
        marginLeft: 35,
        marginRight: 35,
        marginTop: 5,
        fontFamily: 'Arial',
        fontWeight: '100',
        fontSize: 10,
        color: 'black',


    },
    iconInformation: {
        color: '#f5bce3',
        fontSize: 15,
        marginLeft: 18,
        marginRight: 35,
        marginTop: -22,

    },
    inputBox: {
        top: 10,
        marginLeft: 35,
        marginRight: 35,
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
    inputLabel: {
        position: 'relative',
        top: 38,
        left: 35,
        marginBottom: -1,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        fontSize: 11,
        color: '#D4956E'
    },
    iconChevron: {
        fontSize: 10,
        color: '#818182',
        top: -11,
        marginLeft: 350,


    }

})
