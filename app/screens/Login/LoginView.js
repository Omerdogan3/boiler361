import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import * as navigationActions from '../../actions/navigationActions';

class LoginView extends Component {
    constructor(props) {
		super(props);
		this.state = {

		}
	}

    componentDidMount(){
        setTimeout(()=>{
            navigationActions.navigatePayment()
        }, 1500)
    }

    navigate = () => {
        this.props.onLogin('username', 'password');
    };

    render() {
        const {number} = this.props;
        return (
            <View style={styles.container}>
                <Text>Login</Text>
                <TouchableOpacity onPress={() => {
                    // data.getUser((userData)=>{
                    //     this.props.setUserData(userData)
                    // })
                    this.navigate()
                }}>
                    <Text>Go to Home</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 20, fontWeight: '700'}}>{number}</Text>

            </View>
        );
    }
}

export default LoginView;
