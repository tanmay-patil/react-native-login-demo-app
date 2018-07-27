import React, { Component } from 'react';
import {
    Text, TextInput, View, Button, StatusBar, AsyncStorage, KeyboardAvoidingView, Platform
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
            <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior={Platform.OS === 'ios' && "padding"} >
                <View >
                    <StatusBar
                        barStyle="light-content"
                    />
                    <Text>Login Screen</Text>
                    <TextInput style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }} onChangeText={(text) => console.log(text)} />
                    <Button
                        title="Log In"
                        onPress={this.handleSubmit.bind(this)}
                    />
                </View>
            </KeyboardAvoidingView >
        );
    }
}