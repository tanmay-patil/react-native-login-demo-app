import React, { Component } from 'react';
import {
    AsyncStorage, Text, TextInput, View, Button, StatusBar, FlatList
} from 'react-native';
import DeviceInfo from 'react-native-device-info';

const appName = DeviceInfo.getApplicationName();
const brand = DeviceInfo.getBrand();
const carrier = DeviceInfo.getCarrier();
const deviceCountry = DeviceInfo.getDeviceCountry();
const deviceId = DeviceInfo.getDeviceId();
const deviceName = DeviceInfo.getDeviceName();
const freeDiskStorage = DeviceInfo.getFreeDiskStorage();
const model = DeviceInfo.getModel();
const serialNumber = DeviceInfo.getSerialNumber();
const systemName = DeviceInfo.getSystemName();
const systemVersion = DeviceInfo.getSystemVersion();

const ListData = [
    { key: 'App Name', value: appName },
    { key: 'Brand', value: brand },
    { key: 'Model', value: model },
    { key: 'Country', value: deviceCountry },
    { key: 'System OS', value: systemName },
    { key: 'OS Version', value: systemVersion },
    { key: 'ID', value: deviceId },
    { key: 'Name', value: deviceName },
    { key: 'Free Space (bytes)', value: freeDiskStorage },
    { key: 'Serial Number', value: serialNumber },
    { key: 'Carrier', value: carrier },
];


export default class DeviceDetails extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: "Device Info",
            headerStyle: {
                backgroundColor: '#f0f0f0',
            },
        };
    };

    render() {
        return (
            <View style={{ flex: 1, padding: 20 }}>
                <Text style={{ fontWeight: "bold" }}>Your device details : </Text>
                <FlatList
                    data={ListData}
                    renderItem={({ item }) => <Text style={{ padding: 10 }}>{item.key} - {item.value}</Text>}
                />
            </View>
        )
    }
}
