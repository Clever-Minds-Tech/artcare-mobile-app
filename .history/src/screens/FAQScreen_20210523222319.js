import React from 'react';
import { FlatList, ActivityIndicator, Text, View } from 'react-native';
import { Container, Content } from 'native-base';
import Header from '../layout/Header';
/*
export default class FetchExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true };
    }

    componentDidMount() {
        return fetch('https://mirthartcare.virtualcare.pt/artcare/FAQ/')
            .then(response => response.json())
          
            .then(responseJson => {
                console.log(responseJson);
                responseJson.INFO.map(item => { console.log(item)});

                this.setState(
                    {
                        isLoading: false,
                        dataSource: responseJson.INFO,
                    },
                    function () { }
                );
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Container>
                    <Header />
                    <Content>
                        <View style={{ flex: 1, padding: 20 }}>
                            <ActivityIndicator />
                        </View>
                    </Content>
                </Container>
            );
        }

        return (
            <Container>
                <Header />
                <Content>
                    <View>
                        <FlatList
                            data= { this.state.dataSource}
                            renderItem={({ item }) => (
                                <Text>
                                    {item.PERGUNTA}, {item.RESPOSTA}
                                </Text>
                            )}
                            keyExtractor={({ id }, index) => id}
                        />



                    </View>
                </Content>
            </Container>
        );
    }
}
/*

const questionList = require('../apis/faq.json');
*/
/*
const FAQScreen = ({
    params,
}) => (
    <Container>
        <Header />
        <Content>
            <View>
                {
                    questionList.items.map(item => {
                        return (
                            <>
                                <Text>{item.question}</Text>
                                <Text>{item.answer}</Text>
                            </>
                        )
                    })
                }
                <Text>FAQScreen </Text>
            </View>
        </Content>
    </Container>
);

export default FAQScreen;



*/ // TRY
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://mirthartcare.virtualcare.pt/artcare/FAQ/`)
      .then(res => {
        const persons = res.INFO;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(person => <li>{person}</li>)}
      </ul>
    
    
    <Container>
    <Header />
    <Content>
        <View>
            <FlatList
                data= { this.state.dataSource}
                renderItem={({ item }) => (
                    <Text>
                        {item.PERGUNTA}, {item.RESPOSTA}
                    </Text>
                )}
                keyExtractor={({ id }, index) => id}
            />



        </View>
    </Content>
</Container>
    
    )
  }
} 