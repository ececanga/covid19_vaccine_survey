import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import ScrollViewCommands from 'react-native/Libraries/Components/ScrollView/ScrollViewCommands';

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

    login = (name, birthday, city, gender, vaccineType, sideEffect) => {
        alert('name: ' + name + ' birthday: ' + birthday
                + 'city: ' + city + 'gender: ' + gender
                + 'vaccineType: ' + vaccineType + 'sideEffect: ' + sideEffect)
    }

    isFormValid = () => {
        const {name, birthday, city, gender, vaccineType, sideEffect} = this.state;
        return name && birthday && city && gender && vaccineType && sideEffect;
    }

    render() {
        return (
            <View style = {styles.container}>
                <ScrollView>
                    <Text style={styles.titleStyle}>COVID-19 VACCINE SURVEY FORM</Text>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ Name-surname"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleName}/>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ Birth Date"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleBirthday}/>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ City"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleCity}/>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ Gender"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleGender}/>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ Vaccine type they applied"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleVaccineType}/>
                    <TextInput style = {styles.input}
                               underlineColorAndroid = "transparent"
                               placeholder = "○ Any side effect after vaccination"
                               placeholderTextColor = "#8e9031"
                               autoCapitalize = "none"
                               onChangeText = {this.handleSideEffect}/>


                    {
                        !this.isFormValid() ? null : (
                        <View>
                            <TouchableOpacity
                                disabled={!this.isFormValid}
                                style = {styles.submitButton}
                                onPress = {
                                    () => this.login(this.state.name, this.state.birthday, this.state.city, this.state.gender, this.state.vaccineType, this.state.sideEffect)
                                }>
                                <Text style = {styles.submitButtonText}> Send </Text>
                            </TouchableOpacity>
                        </View>)
                    }
                </ScrollView>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23,
    },
    input: {
        margin: 15,
        height: 50,
        borderColor: '#8e9031',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#8e9031',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText:{
        color: 'white',
        textAlign: "center",
    },
    titleStyle:{
        //textDecorationColor: "#ffffff",
        color: "#8e9031",
        fontSize: 36,
        alignSelf: "center",
        textAlign: "center",
        //fontFamily: "monospace",
    },
})
