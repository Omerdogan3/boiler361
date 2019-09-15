import React, { Component } from 'react';
import PaymentView from './PaymentView';
import { connect } from 'react-redux';
import * as loginActions from 'app/actions/loginActions';
import * as userActions from 'app/actions/userActions';

class PaymentContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <PaymentView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        number: state.userReducer.number,
        // userData:
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PaymentContainer);
