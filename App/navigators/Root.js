import { StackNavigator } from 'react-navigation';

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

export default Root = createStackNavigator(
    {
        Login: Login,
        Home: Home
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#1583BE',
                shadowRadius: 0,
                elevation: 0,
                shadowOffset: {
                    height: 0
                },
            },
        },
    }
);