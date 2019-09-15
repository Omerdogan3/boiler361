import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, ScrollView } from 'react-native';
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
		const {number, userData} = this.props;

		console.log(number, userData)

		return (
				<SafeAreaView style={styles.container}>

					<ScrollView style={{marginTop: 20}}>
						{
							userData.map((el, index)=>{
								return(
									<View key={index} style={{padding: 5}}>
										<View  style={{padding: 10, borderRadius: 18, borderWidth: 1, flexDirection: 'row', alignItems: 'center'}}>
											<Image source={{uri: el.profile_pic_url}} style={{width: 60, height: 60, borderRadius: 30}}/>
											<Text style={{fontSize: 18, fontWeight: '700', marginLeft: 10}}>{el.username}</Text>
										</View>

									</View>
								)
							})
						}

					</ScrollView>


					<TouchableOpacity style={{width: 120, borderRadius: 20, height: 80, alignItems: 'center', justifyContent: 'center', backgroundColor: 'gray'}} 
					onPress={()=> {
						setTimeout(()=>{
							this.props.setNumber(number + 1)
						}, 5000)
					}
					}>
						<Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>{number}</Text>
					</TouchableOpacity>
				</SafeAreaView>
		);
	}
}

export default HomeView;