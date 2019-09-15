import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

class HomeView extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount(){
		console.log(this.props.number)
	}

	// componentWillUnmount(){
	// 	this.props.setUserData(undefined)
	// }

	render() {
		const {number} = this.props;

		return (
				<View style={styles.container}>
					<TouchableOpacity style={{width: 120, borderRadius: 20, height: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray'}} 
					onPress={()=> {
						setTimeout(()=>{
							this.props.setNumber(number + 1)
						}, 5000)
					}
					}>
						<Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>{number}</Text>
					</TouchableOpacity>
				</View>
		);
	}
}

export default HomeView;