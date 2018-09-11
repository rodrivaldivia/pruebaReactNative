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
      list: [ { title: 'Infraestructura', icon: 'store' },
              { title: 'Servicios Basicos', icon: 'flight-takeoff' },
              { title: 'Servicios de Salud', icon: 'flight-takeoff'},
              { title: 'Educación', icon: 'flight-takeoff' },
              { title: 'Cultura', icon: 'flight-takeoff' },
              { title: 'Deportes', icon: 'flight-takeoff' },
              { title: 'Otros', icon: 'flight-takeoff' }
      ]
    }
  }
  stealLocation(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // this.setState({
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude,
        //   error: null,
        // });
        alert(JSON.stringify(position));
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    alert("aca");
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
        <Header outerContainerStyles={{ backgroundColor: '#ebc877' }} centerComponent={{ text: 'TuGobiernas2019', style: { fontSize: 18, color: '#fff' } }} />
        <ScrollView style={{ flex: 1}}>
          <View style={{backgroundColor: '#ffffff', margin: 10, flex: 1, borderRadius: 10, paddingBottom: 15}}>
            <List>    
              {
                this.state.preguntas.map((pregunta) => {
                  return (
                     <Question key={ pregunta.id } pregunta={ pregunta }></Question>
                  )
                })
              }
            </List>
            <Text style={{fontWeight: '800', margin:15, fontSize: 25, color: '#596163'}}>Cuentáme tu problema</Text>
            <List>
              { this.state.list.map((item) => (
                  <ListItem
                    key={item.title}
                    title={item.title}
                    leftIcon={{name: item.icon}}
                  />
                )) }
            </List>
            {/*<FormLabel>Pregunta random</FormLabel>
            <FormInput onChangeText={console.log("change")}/>
            <FormValidationMessage>Error message</FormValidationMessage>
            <Button
              onPress={this.stealLocation}
              title="Location"
              color="#841584"
              accessibilityLabel="Compartir tu ubicacion para la propuesta"
            />*/}
          </View>
          <Text>Muchas gracias por ser parte activa de este proyecto ciudadano</Text>
        </ScrollView>
      </View>
    );
  }
}

export default ProposalScreen;