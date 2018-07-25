import React, { Component } from 'react';
import {
    Text
} from 'react-native';
import styles from "./styles";
import { connect } from "react-redux";
import { updateUsername, updatePassword } from "../../actions/";

const MapStateToProps = (state) => ({
    userDetails: state.userDetails
});

const MapDispatchToProps = (dispatch) => ({
    updateUsername: (value) => dispatch(updateUsername(value)),
    updatePassword: (value) => dispatch(updatePassword(value)),
});

class Login extends Component {

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <Text style={styles.welcome}>
                Login Test2
            </Text>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps)(Login)