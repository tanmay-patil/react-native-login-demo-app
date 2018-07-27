import React, { Component } from 'react';
import {
    AsyncStorage, Text, TextInput, View, Button, StatusBar
} from 'react-native';
import styles from "./styles";

export default class Home extends React.Component {

    logOut = async () => {
        try {
            await AsyncStorage.setItem('isLogged', 'false');

            this.props.screenProps.setIsLoggedStatus("false");
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    }

    retrieveLoginData = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogged');
            console.log(value);
            if (value !== null) {
                // We have data!!
                return value;
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    render() {
        console.log(this.retrieveLoginData());
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={this.logOut}
                    title="Logout"
                />
            </View>
        );
    }
}