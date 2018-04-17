import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Menu, Dropdown, Button, Responsive, Header} from "semantic-ui-react";
import mainConfig from '../../configs/main';
import {logout} from '../../actions/auth';
import {connect} from 'react-redux';

class Navbar extends Component {
    navbarLogout = () => {
        const {logout, history, dispatch} = this.props;
        logout(dispatch);
        history.push('/login');
    };

    navbarUserCabinet = () => {
        const {history} = this.props;
        history.push('/user-cabinet');
    };
    // вызывает функцию signout по клику на кнопку

    state = {activeItem: 'home'};

    // TODO (DONE) delete 2 level of Dropdown, make mobile version of admin navbar, test, close feature, push github

    getAdminEmpMenu = () =>
        <div>
            <Responsive minWidth={875}>
                <Menu size='large' stackable>

                    <Menu.Item name='maps' href={mainConfig.mainHost + '/map'}/>
                    <Menu.Item name='dashboard' href={mainConfig.mainHost + '/dashboard'}/>

                    <Menu.Menu>
                        <Dropdown item text='Catalog'>
                            <Dropdown.Menu>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/region'}>Regions</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/area'}>Area</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/location'}>Locations</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers'}>Suppliers types / suppliers</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/iot'}>IoT</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-beehive'}>Type of Beehive</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/number-of-frames'}>Number of frames</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/species'}>Species</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-food'}>Type of food</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-medication'}>Type of medication</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Menu>
                        <Dropdown item text='Beehives management'>
                            <Dropdown.Menu>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/box'}>Box</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/colonies'}>Colonies</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/queens'}>Queens</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/pallets'}>Pallets</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/iot'}>IoT</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/employees'}>Employees</Dropdown.Item>
                                <Dropdown.Item href={mainConfig.mainHost + '/beehives-management/client'}>Clients</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Menu>

                    <Menu.Menu position='right'>

                        <Menu.Item>
                            <Button onClick={this.navbarUserCabinet} color='green'>User cabinet</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button onClick={this.navbarLogout} color='red'>Sign Out</Button>
                        </Menu.Item>

                    </Menu.Menu>

                </Menu>
            </Responsive>

            <Responsive maxWidth={875}>
                <Menu>
                    <Dropdown item text='Menu'>
                    <Dropdown.Menu>
                        <Dropdown.Item href={mainConfig.mainHost + '/catalog'}>Catalog</Dropdown.Item>
                        <Dropdown.Item href={mainConfig.mainHost + '/beehives-management'}>Beehives management</Dropdown.Item>
                        <Dropdown.Item href={mainConfig.mainHost + '/dashboard'}>Dashboard</Dropdown.Item>
                        <Dropdown.Item href={mainConfig.mainHost + '/map'}>Map</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Button onClick={this.navbarUserCabinet} color='green'>User cabinet</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button onClick={this.navbarLogout} color='red'>Sign Out</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>

            </Responsive>
        </div>
    ;

    getClientMenu = () =>
        <div>
            <Responsive minWidth={875}>
                <Menu size='large' stackable>

                    <Menu.Item name='maps' href={mainConfig.mainHost + '/map'}/>
                    <Menu.Item name='dashboard' href={mainConfig.mainHost + '/dashboard'}/>
                    <Menu.Item name='beehives' href={mainConfig.mainHost + '/beehives'}/>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            {/*primary ???*/}
                            <Button onClick={this.navbarUserCabinet} color='green'>User cabinet</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button onClick={this.navbarLogout} color='red'>Sign Out</Button>
                        </Menu.Item>

                    </Menu.Menu>

                </Menu>
            </Responsive>

            <Responsive maxWidth={875}>
                <Menu>
                    <Dropdown item text='Menu'>
                        <Dropdown.Menu>
                            <Dropdown.Item href={mainConfig.mainHost + '/map'}>Maps</Dropdown.Item>
                            <Dropdown.Item href={mainConfig.mainHost + '/dashboard'}>Dashboard</Dropdown.Item>
                            <Dropdown.Item href={mainConfig.mainHost + '/beehives'}>Beehives</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='right'>
                        <Menu.Item>
                            {/*primary ???*/}
                            <Button onClick={this.navbarUserCabinet} color='green'>User cabinet</Button>
                        </Menu.Item>

                        <Menu.Item>
                            <Button onClick={this.navbarLogout} color='red'>Sign Out</Button>
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </Responsive>
        </div>;

    getCatalogAdminMenu = () =>
        <div>
            <Header> Hello it's me getCatalogAdminMenu </Header>
            {/*<Menu>*/}
            {/*<Dropdown item text='Menu'>*/}
            {/*<Dropdown.Menu>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/region'}>Regions</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/area'}>Area</Dropdown.Item>*/}
            {/*<Dropdown.Item>*/}
            {/*<Dropdown text='Locations'>*/}
            {/*<Dropdown.Menu>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/location/location'}>Locations</Dropdown.Item>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/location/type-of-location'}>Type*/}
            {/*of*/}
            {/*locations</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/location/time-zone'}>Time*/}
            {/*zone</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
            {/*</Dropdown>*/}
            {/*</Dropdown.Item>*/}
            {/*<Dropdown.Item>*/}
            {/*<Dropdown text='Suppliers types / suppliers'>*/}
            {/*<Dropdown.Menu>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers/location-owner'}>Location*/}
            {/*Owner</Dropdown.Item>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers/queen-breeder'}>Queen*/}
            {/*breeder</Dropdown.Item>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers/equipment-supplier'}>Equipment*/}
            {/*supplier</Dropdown.Item>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers/colony-supplier'}>Colony*/}
            {/*supplier</Dropdown.Item>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/suppliers-types-suppliers/transportation-supplier'}>Transportation*/}
            {/*Supplier</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
            {/*</Dropdown>*/}
            {/*</Dropdown.Item>*/}
            {/*<Dropdown.Item>*/}
            {/*<Dropdown text='IoT'>*/}
            {/*<Dropdown.Menu>*/}
            {/*<Dropdown.Item*/}
            {/*href={mainConfig.mainHost + '/catalog/IoT/IoT'}>IoT</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/IoT/IoT-type'}>IoT*/}
            {/*type</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
            {/*</Dropdown>*/}
            {/*</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-beehive'}>Type of*/}
            {/*Beehive</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/number-of-frames'}>Number of*/}
            {/*frames</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/species'}>Species</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-food'}>Type of*/}
            {/*food</Dropdown.Item>*/}
            {/*<Dropdown.Item href={mainConfig.mainHost + '/catalog/type-of-medication'}>Type of*/}
            {/*medication</Dropdown.Item>*/}
            {/*</Dropdown.Menu>*/}
            {/*</Dropdown>*/}

            {/*<Menu.Menu position='right'>*/}
            {/*<Menu.Item>*/}
            {/*/!*primary ???*!/*/}
            {/*<Button onClick={this.navbarUserCabinet} color='green'>User cabinet</Button>*/}
            {/*</Menu.Item>*/}

            {/*<Menu.Item>*/}
            {/*<Button onClick={this.navbarLogout} color='red'>Sign Out</Button>*/}
            {/*</Menu.Item>*/}
            {/*</Menu.Menu>*/}
            {/*</Menu>*/}
        </div>;

    render() {
        const {userType} = this.props;
        console.log(userType);
        return (
            <div className='navbar'>
                {userType === 3 ? this.getClientMenu() : this.getAdminEmpMenu()}
                {/*[1, 2, 3].map(e => <div></div>)*/}
            </div>
        );
    }
}

Navbar.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userType: PropTypes.number.isRequired
};

const mapStateToProps = (state) => { // достает нужные поля из глобального состояния
    return ({
        userType: state.user.user_type
    });
};

export default connect(mapStateToProps, {logout})(Navbar);
