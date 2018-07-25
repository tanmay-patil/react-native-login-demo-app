import React, { Component } from 'react';
import {
    Platform,
    View,
    StatusBar
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styles from "./styles";
import Login from "./components/Login/";

export default class App extends Component {

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="#4F6D7A"
                />

                <Login />

            </View>
        );
    }
}


