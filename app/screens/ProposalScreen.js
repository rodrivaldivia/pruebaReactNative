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
      preguntas: ['pregunta 1', 'pregunta 2'],
    }

  }

  
  render() {
    return (
      <View>
        <Header centerComponent={{ text: 'Nueva Propuesta', style: { fontSize: 18, color: '#fff' } }} />
        <ScrollView >
          <FormLabel>Pregunta #1</FormLabel>
          <FormInput onChangeText={console.log("change")}/>
          <FormValidationMessage>Error message</FormValidationMessage>
          <FormLabel>Pregunta #2</FormLabel>
          <FormInput onChangeText={console.log("change")}/>
        </ScrollView>
      </View>
    );
  }
}

export default ProposalScreen;