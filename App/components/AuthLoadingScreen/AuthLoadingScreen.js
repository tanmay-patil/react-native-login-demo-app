import React, { Component } from 'react';
import { AsyncStorage, View, StatusBar, ActivityIndicator, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class AuthLoadingScreen extends Component {
    constructor() {
        super();
        this._bootstrapAsync();
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('isLogged');

        // This will switch to the App screen or Auth screen and this loading
        // screen will be unmounted and thrown away.
        this.props.navigation.navigate(userToken === "true" ? 'App' : 'Auth');
    };

    // Render any loading content that you like here
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
            </View>
        );
    }
}
