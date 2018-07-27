import React, { Component } from 'react';
import {
    Text, TextInput, View, Button, StatusBar, AsyncStorage
} from 'react-native';
import styles from "./styles";

export default class Login extends Component {

    handleSubmit() {
        let dummyLoginCredentials = this.getDummyLoginData();

        if (this.authenticateLogin()) {
            this.setLoginStatus();

            this.props.screenProps.setLoginCredentials(dummyLoginCredentials);
        }
    }

    authenticateLogin() {
        return true;
    }

    getDummyLoginData() {
        let dummyLoginCredentials = {};
        dummyLoginCredentials.username = "admin";
        dummyLoginCredentials.password = "123";
        dummyLoginCredentials.isLogged = "true";
        return dummyLoginCredentials;
    }

    setLoginStatus = async () => {
        try {
            await AsyncStorage.setItem('isLogged', 'true');
        } catch (error) {
            // Error saving data
            console.log("Async operation for storing failed");
        }
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StatusBar
                    barStyle="light-content"
                />
                <Text>Login Screen</Text>
                <Button
                    title="Log In"
                    onPress={this.handleSubmit.bind(this)}
                />
            </View>
        );
    }
}