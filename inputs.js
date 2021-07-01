import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {
    state = {
        name: '',
        birthday: '',
        city: '',
        gender: '',
        vaccineType: '',
        sideEffect: '',
    }
    handleName = (text) => {
        this.setState({ name: text })
    }
    handleBirthday = (text) => {
        this.setState({ birthday: text })
    }
    handleCity = (text) => {
        this.setState({ city: text })
    }
    handleGender = (text) => {
        this.setState({ gender: text })
    }
    handleVaccineType = (text) => {
        this.setState({ vaccineType: text })
    }
    handleSideEffect = (text) => {
        this.setState({ sideEffect: text })
    }

    login = (email, pass) => {
        alert('email: ' + email + ' password: ' + pass)
    }
    render() {
        return (
            <View style = {styles.container}>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ Name-surname"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleName}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ Birth Date"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleBirthday}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ City"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleCity}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ Gender"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleGender}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ Vaccine type they applied"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleVaccineType}/>
                <TextInput style = {styles.input}
                           underlineColorAndroid = "transparent"
                           placeholder = "○ Any side effect after vaccination"
                           placeholderTextColor = "#9a73ef"
                           autoCapitalize = "none"
                           onChangeText = {this.handleVaccineType}/>

                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.email, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Send </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white'
    }
})
