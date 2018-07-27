import React, { Component } from 'react';
import { AsyncStorage, Button, View } from 'react-native';

export default class LogoutButton extends Component {
    logOut = async () => {
        try {
            await AsyncStorage.setItem('isLogged', 'false');

            this.props.navigationProp.navigate('Auth');
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    }

    render() {
        return (
            <View style={{ flex: 1, marginRight: 10 }} >
                <Button
                    onPress={this.logOut.bind(this)}
                    title="Logout"
                    buttonStyle={{ color: "red", paddingTop: 5, paddingBottom: 5, paddingLeft: 8, paddingRight: 8 }}
                />
            </View>
        )
    }
}