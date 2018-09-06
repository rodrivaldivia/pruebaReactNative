import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native'
import { Header, List, ListItem } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
// import { Habilitaciones } from '../models/Habilitaciones';
// import { Proveedores } from '../models/Proveedores';

class ProposalScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preguntas: [{ s: 'pregunta 1'}, { s: 'pregunta 2'}, { s: 'pregunta 3'}, { s: 'pregunta 3'}],
    }

  }

  
  render() {

    return (
      <View>
        <Header centerComponent={{ text: 'Nueva Propuesta', style: { fontSize: 18, color: '#fff' } }} />
        <ScrollView>
          {
            this.state.preguntas.map((pregunta, i) => {
              return (
                <View key={ i }>{/*
                  <Text>{ pregunta.s }</Text>*/}
                  <FormLabel>{ pregunta.s }</FormLabel>
                  <FormInput onChangeText={console.log("change")}/>
                  {false && <FormValidationMessage>Error message</FormValidationMessage>}
                </View>
              )
            })
          }


          {/*
          <FormLabel>Pregunta random</FormLabel>
                <FormInput onChangeText={console.log("change")}/>
                <FormValidationMessage>Error message</FormValidationMessage>*/}
        </ScrollView>
      </View>
    );
  }
}

export default ProposalScreen;