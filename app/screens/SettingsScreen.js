import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements'

export default class SettingsScreen extends React.Component {
  render() {

    const mainTitle = '@TuGobiernas2019';
    const secondTitle = 'Votar es un acto inteligente';
    const urlTitle = 'www.tugobiernas.com';

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, height: 300}}>
         <Image
          resizeMode="cover"
          style={{
            flex: 1,
            height: undefined, width: undefined
          }}
          source={require('../assets/information-intro.png')}
            />
        </View>
        <View style={{ flex: 1, marginTop: 20, alignItems: 'center' }}>
          <Text style={[styles.textStyle, styles.bold]}>Informacion de la App</Text>
      {/*    <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('HomeScreen')}
          />*/}
          <Text style={[styles.secondaryTextStyle]}>Tu opinion es muy <Text style={{fontWeight: '800'}}>importante</Text></Text>
           <Button
           style={{marginTop: 20}}
           fontWeight={'800'}
           borderRadius={40}
           backgroundColor={'#e8be58'}
           icon={{name: 'play-circle-outline'}}
           title="Ver Video"
           onPress={() => this.props.navigation.navigate('HomeScreen')}
          />
        </View>
        <View style={{ marginTop: 20, alignItems: 'center' }}>
        
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 ralewayFont: {
  fontFamily: 'Raleway',
  color: 'white',
  padding: 10,
 },
 bold: {
  fontWeight: '800',
 },
  textStyle: {
  fontSize: 25,
  color: '#787878',
  fontWeight: '500',
  textAlign: 'center',
 },
  secondaryTextStyle: {
  marginTop: 20,
  fontSize: 20,
  color: '#ee275d',
  fontWeight: '500',
  textAlign: 'center',
 }
});