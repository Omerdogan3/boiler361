import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class PaymentView extends Component {
    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    render() {
        return (
            <View style={styles.container}>
              <Text style={{fontSize: 40}}>Payment</Text>
            </View>
        );
    }
}

export default PaymentView;
