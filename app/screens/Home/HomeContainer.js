import React, { Component } from 'react';
import HomeView from './HomeView';
import * as userActions from 'app/actions/userActions';

import { connect } from 'react-redux';

class HomeContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        userData: state.userReducer.userData,
        number: state.userReducer.number,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setNumber: (number) => dispatch(userActions.setNumber(number))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
