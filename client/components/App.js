// Dependencies
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import actions from '../redux/actions';
import constants from '../redux/constants';

import './App.scss';
class App extends Component {
    render() {
        return (
            <div className="App">
                <h1>React & Redux Boilerplate Project</h1>
            </div>
        );
    }
}

function bindStateToProps(state) {
    return state;
}
function bindActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch),
    };
}

export default connect(
    bindStateToProps,
    bindActionsToProps
)(App);
