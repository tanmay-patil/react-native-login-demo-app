import React, { Component } from 'react';
import {
    Text, TextInput, View, Button, StatusBar, AsyncStorage, KeyboardAvoidingView, Platform
} from 'react-native';
import styles from "./styles";

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }


    handleSubmit() {

        let dummyLoginCredentials = this.getCredentialsObject();

        if (this.authenticateLogin()) {
            this.setLoginStatus();

            // this.props.screenProps.setLoginCredentials(dummyLoginCredentials);
        }
    }

    authenticateLogin() {
        return true;
    }

    getCredentialsObject() {
        let credentials = {};
        credentials.username = this.state.username;
        credentials.password = this.state.password;
        credentials.isLogged = "true";
        return credentials;
    }

    setLoginStatus = async () => {
        try {
            await AsyncStorage.setItem('isLogged', 'true');
            this.props.navigation.navigate('App');
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
                    <TextInput
                        style={{ height: 40, width: 150, marginBottom: 10, padding: 5, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholder="Username"
                    />
                    <TextInput
                        style={{ height: 40, width: 150, marginBottom: 10, padding: 5, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => this.setState({ password: text })}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <Button
                        title="Log In"
                        onPress={this.handleSubmit.bind(this)}
                    />
                </View>
            </KeyboardAvoidingView >
        );
    }
}