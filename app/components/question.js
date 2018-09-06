import React, { Component } from 'react';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'
import { View } from 'react-native'

export class Question extends React.Component {

	constructor(props) {
	 super(props)
 	}

	render() {
		return (
			<View key={ this.props.pregunta.id }>
		      <FormLabel>{ this.props.pregunta.s }</FormLabel>
		      <FormInput onChangeText={console.log("change")}/>
		      {false && <FormValidationMessage>Error message</FormValidationMessage>}
		    </View>
		)
	 }
	}
export default Question;