
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import DeviceDetails from "./components/DeviceDetails/DeviceDetails";
import AuthLoadingScreen from "./components/AuthLoadingScreen/AuthLoadingScreen";

const AppStack = createStackNavigator(
    {
        Home: Home,
        DeviceDetails: DeviceDetails,
    }, {
        headerMode: 'screen',
        navigationOptions: {
            title: "App Stack"
        },
        initialRouteName: 'Home',
    }
);

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