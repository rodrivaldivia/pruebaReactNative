import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  Picker,
  TouchableOpacity,
  PixelRatio,
  DatePickerIOS,
  ScrollView
} from 'react-native'
import { List, ListItem, Header } from 'react-native-elements';
import ListPicker from 'react-native-list-picker';
import { Proveedores } from '../models/Proveedores';
import { Habilitaciones } from '../models/Habilitaciones';

class HabilitacionNuevaScreen extends Component {
  /*onLearnMore = (user) => {
    this.props.navigation.navigate('Details', { ...user });
  };*/
  constructor(props) {
    super(props);
    this.state = { name: '',
                   proveedor: null,
                   date: null,
                 };
  }
  
  save(){
    alert(this.state.proveedor.name)
    Habilitaciones.agregar(this.state.name, this.state.proveedor, this.state.date );
     this.state.name = '';
  }
  
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header backgroundColor='chocolate'
            centerComponent={{ text: 'Agregar Habilitacion', style: { fontSize: 18, color: '#fff' } }} />
      <ScrollView>
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
            Proveedor
          </Text>

          <ListPicker
            ref={(picker) => { this.picker = picker; }}
            onChange={(value)=> this.setState({ proveedor: value })}
            closeable = {true}
            isEmojiable = {false}
            dataList={ Proveedores.listProveedores }
          />
          <TouchableOpacity onPress={()=> this.picker.openModal()}>
            <Text style={styles.link}>
               Elegir Proveedor
            </Text>
          </TouchableOpacity>
          {this.state.pickData &&
            <Text style={styles.data}>
              {JSON.stringify(this.state.pickData, null, 2)}
            </Text>
          }          
        </View>
        
        <View style={[styles.box3, styles.box]}>
          <Text style={styles.subText}>
            Fecha 
          </Text>
          <DatePickerIOS 
            date={(this.state && this.state.date) || new Date()}
            onDateChange={(newDate) => {
              this.setState({date: newDate})
            }}
            mode={'date'}
            timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()}
          />
        </View>

        <View style={ styles.box }>
          <Button
            title="Guardar"
            onPress={() => this.save() }
          />
        </View>
      </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 15,
    justifyContent: 'center', alignItems: 'center'
  },
  link: {
    fontSize: 14,
    textAlign: 'center',
    color: '#888',
    textDecorationLine: 'underline'
  },
    data: {
    padding: 15,
    marginTop: 10,
    backgroundColor: '#ddd',
    borderColor: '#888',
    borderWidth: 1 / PixelRatio.get(),
    color: '#777'
  },
  box: {
    padding: 10,

  },
  box1: {
    backgroundColor: 'honeydew',
    height: 120
  },
  box2: {
    backgroundColor: 'cornsilk',
    height: 100
  },
  box3: {
    backgroundColor: 'honeydew',
    height: 250
  },
  save: {
    padding: 10,
    flex: 3
  }
});

export default HabilitacionNuevaScreen;