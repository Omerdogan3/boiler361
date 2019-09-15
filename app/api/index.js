// General api to access data
import ApiConstants from './ApiConstants';
import axios from 'axios';

class DataProvider {
	getInstagramData(username, callback){
		axios.get("https://www.instagram.com/" + username  + "/?__a=1").then((userDetail)=>{
			callback(userDetail.data.graphql.user)
		})
	}
}

export let data = new DataProvider()