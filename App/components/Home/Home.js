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
                backgroundColor: '#f0f0f0',
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

    handleClick() {
        console.log(this.props);
        this.props.navigation.navigate('DeviceDetails');
    }

    render() {

        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    onPress={this.handleClick.bind(this)}
                    title="Go To Device Details"
                    buttonStyle={{ color: "red", paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}
                />
            </View>
        );
    }
}