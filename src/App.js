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
import CatalogPage from "./components/pages/CatalogPage/MainCatalogPage/index";
import MapPage from "./components/pages/MapPage/index";
import DashboardPage from "./components/pages/DashboardPage/index";
import BeehivesManagementPage from "./components/pages/BeehivesManagementPage/index";
import PrivateRoute from "./components/subcomponents/PrivateRoute";
import Navbar from "./components/subcomponents/Navbar";
import Footer from "./components/subcomponents/Footer";
import AreaPage from "./components/pages/CatalogPage/AreaPage";
import IoTPage from "./components/pages/CatalogPage/IoTPage";
import NumberOfBeehivePage from "./components/pages/CatalogPage/NumberOfBeehivePage";
import RegionPage from "./components/pages/CatalogPage/RegionPage";
import SpeciesPage from "./components/pages/CatalogPage/SpeciesPage";
import SuppliersTypesSuppliersPage from "./components/pages/CatalogPage/SuppliersTypesSuppliersPage";
import TypeOfBeehivePage from "./components/pages/CatalogPage/TypeOfBeehivePage";
import TypeOfFoodPage from "./components/pages/CatalogPage/TypeOfFoodPage";
import TypeOfMedicationPage from "./components/pages/CatalogPage/TypeOfMedicationPage";
import LocationPage from "./components/pages/CatalogPage/LocationPage";
import NumberOfFramesPage from "./components/pages/CatalogPage/NumberOfFramesPage";
import BoxPage from "./components/pages/BeehivesManagementPages/BoxPage";
import ClientsPage from "./components/pages/BeehivesManagementPages/ClientsPage";
import ColoniesPage from "./components/pages/BeehivesManagementPages/ColoniesPage";
import EmployeesPage from "./components/pages/BeehivesManagementPages/EmployeesPage";
import IoTBPage from "./components/pages/BeehivesManagementPages/IoTPage";
import PalletsPage from "./components/pages/BeehivesManagementPages/PalletsPage";
import QueensPage from "./components/pages/BeehivesManagementPages/QueensPage";
import BeehivesPage from "./components/pages/BeehivesPage";

// TODO (DONE) make dummy page components for catalogs and beehive management

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

            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog" exact component={CatalogPage}/>
            <PrivateRoute auth={isAuth} location={location} path="/dashboard" exact component={DashboardPage}/>
            <PrivateRoute auth={isAuth} location={location} path="/map" exact component={MapPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management" exact component={BeehivesManagementPage}/>
            <PrivateRoute auth={isAuth} location={location} path="/beehives" exact component={BeehivesPage}/>

            {/*Catalog*/}
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/region" exact component={RegionPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/area" exact component={AreaPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/iot" exact component={IoTPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/species" exact component={SpeciesPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/suppliers-types-suppliers" exact component={SuppliersTypesSuppliersPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/type-of-medication" exact component={TypeOfMedicationPage}/>
            {/*<PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/number-of-beehive" exact component={NumberOfBeehivePage}/>*/}
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/type-of-beehive" exact component={TypeOfBeehivePage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/type-of-food" exact component={TypeOfFoodPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/location" exact component={LocationPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/catalog/number-of-frames" exact component={NumberOfFramesPage}/>

            {/*Beehives management*/}
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/box" exact component={BoxPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/client" exact component={ClientsPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/colonies" exact component={ColoniesPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/employees" exact component={EmployeesPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/iot" exact component={IoTBPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/pallets" exact component={PalletsPage}/>
            <PrivateRoute auth={isAuth} userType={userType} permission={1} location={location} path="/beehives-management/queens" exact component={QueensPage}/>
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