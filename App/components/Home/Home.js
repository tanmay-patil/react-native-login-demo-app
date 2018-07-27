import React, { Component } from 'react';
import {
    AsyncStorage, Text, TextInput, View, Button, StatusBar
} from 'react-native';
import LogoutButton from '../../utilities/';
import styles from "./styles";

export default class Home extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Dashboard",
            headerLeft: null,
            headerRight: (<LogoutButton navigationProp={navigation.getParam('navigationProp')} />),
            headerStyle: {
                backgroundColor: '#82c182',
                shadowRadius: 0,
                elevation: 0,
                shadowOffset: {
                    height: 0
                },
            },
        };
    };

    componentWillMount() {
        this.props.navigation.setParams({ navigationProp: this.props.navigation });
    }

    logOut = async () => {
        try {
            await AsyncStorage.setItem('isLogged', 'false');

            // this.props.screenProps.setIsLoggedStatus("false");
            this.props.navigation.navigate('Auth');
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
            </View>
        );
    }
}