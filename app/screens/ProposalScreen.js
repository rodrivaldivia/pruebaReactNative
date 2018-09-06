import React, { Component } from 'react';
import { Text, View, Button, ScrollView, FlatList, SectionList } from 'react-native'
import { Header, List, ListItem } from 'react-native-elements';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

import { Question } from '../components/question';
// import { Habilitaciones } from '../models/Habilitaciones';
// import { Proveedores } from '../models/Proveedores';

class ProposalScreen extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      preguntas: [{ id: 1, s: '¿Cual es el problema que tienes?'}, 
                  { id: 2, s: '¿Cual es la solución?'}, 
                  { id: 3, s: '¿A cuanta gente benefeciaria?'}, 
                  { id: 4, s: '¿Donde es el problema?'}],
                }

  }

  
  render() {

    return (
      <View>
        <Header centerComponent={{ text: 'TuGobiernas2019', style: { fontSize: 18, color: '#fff' } }} />
        <ScrollView>
          {
            this.state.preguntas.map((pregunta) => {
              return (
                 <Question key={ pregunta.id } pregunta={ pregunta }></Question>
              )
            })
          }
          <Text>Muchas gracias por ser parte activa de este proyecto ciudadano</Text>
        </ScrollView>
      </View>
    );
  }
}

export default ProposalScreen;