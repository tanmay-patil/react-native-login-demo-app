import Reactotron from 'reactotron-react-native';
import React from 'react';
import { AsyncStorage, View, Button } from "react-native"
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import AuthLoadingScreen from "./components/AuthLoadingScreen/AuthLoadingScreen";
import { connect } from "react-redux";
import { setLoginCredentials, setIsLoggedStatus } from "./actions/";

const MapStateToProps = (state) => ({
    currentState: state
});

const MapDispatchToProps = (dispatch) => ({
    setLoginCredentials: (object) => dispatch(setLoginCredentials(object)),
    setIsLoggedStatus: (object) => dispatch(setIsLoggedStatus(object))
});

const AppStack = createStackNavigator({
    Home: {
        screen: Home,
    }
}, {
        headerMode: 'screen',
        navigationOptions: {
            title: "App Stack"
        }
    });
const AuthStack = createStackNavigator(
    {
        Login: {
            screen: Login,
        }
    }, {
        headerMode: 'screen',
        navigationOptions: {
            title: "Auth Stack",
            headerLeft: null,
            headerStyle: {
                backgroundColor: '#1583BE',
                shadowRadius: 0,
                elevation: 0,
                shadowOffset: {
                    height: 0
                },
            },
        }
    }
);

export default createSwitchNavigator(
    {
        AuthLoading: AuthLoadingScreen,
        App: AppStack,
        Auth: AuthStack,
    },
    {
        initialRouteName: 'AuthLoading',
    }
);