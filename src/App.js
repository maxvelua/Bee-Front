import React from 'react';
import {Route} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import './assets/css/default.min.css';

import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterAdminPage from "./components/pages/RegisterAdminPage";
import RegisterEmployeePage from "./components/pages/RegisterEmployeePage";
import RegisterClientPage from "./components/pages/RegisterClientPage";
import UserCabinetPage from "./components/pages/UserCabinetPage";
import CatalogPage from "./components/pages/CatalogPage";
import PrivateRoute from "./components/subcomponents/PrivateRoute";
import Navbar from "./components/subcomponents/Navbar";
import Footer from "./components/subcomponents/Footer";

const App = ({location, dispatch, history, isAuth, userType}) => (
    <div className="reactBody">
        {isAuth && (<Navbar history={history} dispatch={dispatch} location={location}/> || <Footer/>)}
        <div className='content'>

            <Route location={location} path="/login" exact component={LoginPage}/>
            <Route location={location} path="/register-admin" exact component={RegisterAdminPage}/>

            <PrivateRoute auth={isAuth} location={location} path="/" exact component={HomePage}/>
            <PrivateRoute auth={isAuth} location={location} path="/user-cabinet" exact component={UserCabinetPage}/>

            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/register-employee" exact component={RegisterEmployeePage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={2} location={location} path="/register-client" exact component={RegisterClientPage}/>

            {/*<PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog" exact component={CatalogPage}/>*/}
        </div>
        <Footer/>
    </div>
);

App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    isAuth: PropTypes.bool,
    userType: PropTypes.number
};

const mapStateToProps = (state) => ({
    isAuth: !!state.auth.token,
    userType: state.user.user_type
});

export default connect(mapStateToProps)(App);