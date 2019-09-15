import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import Login from 'app/screens/Login';
import Home from 'app/screens/Home';
import PaymentPopup from 'app/screens/PaymentPopup';

const RNApp = createStackNavigator(
    {
        Login: createStackNavigator({
            Login: {
                screen: Login,
                navigationOptions: { header: null, gesturesEnabled: false }
            },
            Home: {
                screen: Home,
                navigationOptions: { gesturesEnabled: true }
            }
        },{
            headerMode: 'none',
            mode: 'card'
        }) ,
        PaymentPopup: {
            screen: PaymentPopup,
            navigationOptions: { header: null, gesturesEnabled: true }
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        mode: 'modal'
    }
);

export default createAppContainer(RNApp);
