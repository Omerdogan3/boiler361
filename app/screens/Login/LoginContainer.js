import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import * as userActions from 'app/actions/userActions';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        number: state.userReducer.number,
        userData: state.userReducer.userData
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd)),
        setUserData: (userData) => dispatch(userActions.setUserData(userData))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
