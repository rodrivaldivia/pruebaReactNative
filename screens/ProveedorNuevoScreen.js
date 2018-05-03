import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import { List, ListItem, Header } from 'react-native-elements';
import { Proveedores } from '../models/Proveedores';


class ProveedorNuevoScreen extends Component {
  /*onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };*/
  constructor(props) {
    super(props);
    this.state = { name: '',
                   direccion: '',
                 };
  }
  
  save(){
    Proveedores.agregar(this.state.name, this.state.direccion );
     this.state.name = '';
     this.state.direccion = '';
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header backgroundColor='chocolate'
            centerComponent={{ text: 'Agregar Proveedor', style: { fontSize: 18, color: '#fff' } }} />
        <View style={[styles.box1, styles.box]}>
          <Text style={styles.subText}>
            Nombre 
          </Text>
          <TextInput
            placeholder=" Nombre"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(name) => this.setState({name})}
            value={this.state.name}
          />
        </View>
        
        <View style={[styles.box2, styles.box ]}>
          <Text style={styles.subText}>
            Direccion
          </Text>
          <TextInput
            placeholder=" Direccion"
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(direccion) => this.setState({direccion})}
            value={this.state.direccion}
          />
        </View>
        <View style={ styles.box }>
          <Button
            title="Guardar"
            onPress={() => this.save() }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 30,
    justifyContent: 'center', alignItems: 'center'
  },
  box: {
    padding: 10,
    height: 150
  },
  box1: {
    backgroundColor: 'honeydew',
  },
  box2: {
    backgroundColor: 'cornsilk',
  },
  save: {
    padding: 10,
    flex: 3
  }
});

export default ProveedorNuevoScreen;