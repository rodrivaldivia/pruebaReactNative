import React, { Component } from 'react';
import {
  Text,
  View,
  Button,
  ScrollView,
  FlatList,
  SectionList
} from 'react-native'
import { Header, List, ListItem } from 'react-native-elements';
import { Habilitaciones } from '../models/Habilitaciones';
import { Proveedores } from '../models/Proveedores';

class HabilitacionesScreen extends React.Component {
  /*onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };*/
  constructor(props){
    super(props);
    this.state = { refresh: 0,
                   habilitaciones: [ { title: 'Title1', data: Habilitaciones.listHabilitaciones } ]
                 };
    const section = [{
      id: 0,
      data: this.state.data,
    }]
    const didFocusSubscription = this.props.navigation.addListener(
      'didFocus',
      payload => {
        this.refresh()
      }
    );
  }
  
  refresh() {
    this.setState({ refresh: null }, () => { this.setState({ refresh: 0 }) });
    this.state.refresh++;
    //alert(JSON.stringify(this.state.sections))
  }
  
  render() {
    return (
      <View>
        <Header centerComponent={{ text: 'Habilitaciones', style: { fontSize: 18, color: '#fff' } }} />
        <ScrollView >
          <SectionList  style = {{ flex:1 }}
            extraData={ Proveedores.listProveedores }
            renderItem={({ item }) => 
              <ListItem
                title={ item.proveedor.name }
                subtitle={ item.fecha.toString() }
              />
            } 
            sections={ this.state.habilitaciones }
            keyExtractor={ (item) => item.name } 
          />
        </ScrollView>
      </View>
    );
  }
}

export default HabilitacionesScreen;