import React from 'react';
import {Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import './assets/css/default.min.css';

import HomePage from "./components/pages/HomePage";

const App = ({location, dispatch, history}) => (
    <div className="reactBody">
        <div className='content'>
            <Route location={location} path="/home" exact component={HomePage}/>
        </div>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps)(App);