import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as navigationActions from '../../actions/navigationActions';
import {data} from '../../api';

const {width, height} = Dimensions.get('window');

class LoginView extends Component {
    constructor(props) {
		super(props);
		this.state = {
			username: ''
		}
	}

    componentDidMount(){
        // setTimeout(()=>{
            // navigationActions.navigatePayment()
				// }, 1500)
    }

    navigate = () => {
        this.props.onLogin('username', 'password');
		};
		
		onChangeText = (username) => {
			this.setState({username})
		}

		testFunction(callback){
			setTimeout(()=>{
				callback("TEST")
			}, 5000)
		}

    render() {
				const {number, userData} = this.props;
				let {username} = this.state;

        return (
					<View style={styles.container}>
					
						<TextInput
							style={{ height: height * 0.1, borderRadius: 15, padding: 15, width: width * 0.4, borderColor: 'gray', borderWidth: 1 }}
							onChangeText={text => this.onChangeText(text)}
							value={username}
						/>

							<TouchableOpacity style={{margin: 10}} onPress={() =>  
								data.getInstagramData(username, (newUserData)=>{
									// console.log(newUserData) 
									this.props.setUserData([...userData, newUserData])
								})
								}>
								<Text>Submit</Text>
							</TouchableOpacity>

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
