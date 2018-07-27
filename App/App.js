import Reactotron from 'reactotron-react-native';
import React from 'react';
import { AsyncStorage, View } from "react-native"
import { createStackNavigator } from 'react-navigation';
import SplashScreen from 'react-native-splash-screen';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { connect } from "react-redux";
import { setLoginCredentials, setIsLoggedStatus } from "./actions/";

const MapStateToProps = (state) => ({
    currentState: state
});

const MapDispatchToProps = (dispatch) => ({
    setLoginCredentials: (object) => dispatch(setLoginCredentials(object)),
    setIsLoggedStatus: (object) => dispatch(setIsLoggedStatus(object))
});

const SignedInStack = createStackNavigator(
    {
        Home: {
            screen: Home,
            navigationOptions: {
                title: "Dashboard",
                headerLeft: null
            },
        },
    },
    {
        initialRouteName: 'Home',
    }
);

const SignedOutStack = createStackNavigator(
    {
        Login: {
            screen: Login,
            param: "test123",
            navigationOptions: {
                title: "Login",
                headerLeft: null,
                headerStyle: {
                    backgroundColor: '#1583BE',
                    shadowRadius: 0,
                    elevation: 0,
                    shadowOffset: {
                        height: 0
                    },
                },
            },
        },
    },
    {
        initialRouteName: 'Login',
    }
);

class App extends React.Component {
    componentDidMount() {
        SplashScreen.hide();
    }

    componentWillMount() {
        this.checkLoginStatus();
    }

    showAllAsyncKeys = async () => {
        const keys = await AsyncStorage.getAllKeys()
        const values = await AsyncStorage.multiGet(keys)
        console.log("---Async storage all keys and values---");
        console.log(JSON.stringify(values, null, 2));
        Reactotron.display({
            name: 'ALL ASYNC STORAGE KEYS',
            preview: 'ASYNC STORAGE?',
            value: values,
            important: true
        })
    }

    checkLoginStatus = async () => {
        try {
            const value = await AsyncStorage.getItem('isLogged');

            if (value != null) {
                this.props.setIsLoggedStatus(value);
            }

        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    AppNavigator = () => {

        let isLogin = this.props.currentState.loginCredentials.isLogged;
        console.log(this.props.currentState.loginCredentials);
        if (isLogin === "true") {
            return <SignedInStack screenProps={{ setIsLoggedStatus: this.props.setIsLoggedStatus }} />
        }
        else {
            return <SignedOutStack screenProps={{ setLoginCredentials: this.props.setLoginCredentials }} />
        }
    };

    render() {
        this.showAllAsyncKeys();

        return (
            <View style={{ flex: 1 }}>
                {this.AppNavigator()}
            </View>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(App)