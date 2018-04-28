import React, {Component} from 'react';
import {Header, Menu, Dimmer, Loader, Segment, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import catalogApi from '../../../../api/catalog';
import _ from 'lodash';

export default class LocationPage extends Component {
    state = {
        activeItem: 'loc',
        loading: true,
        locations: [],
        locationTypes: [],
        timeZones: []
    };

    componentDidMount = async () => this.fetchLocation();

    fetchLocation = async () => {
        this.setState({loading: true}); // wait
        const locations = await catalogApi.location.get(); // get location from server
        console.log(locations);
        this.setState({loading: false, locations});
    };

    fetchLocationTypes = async () => {
        this.setState({loading: true});
        const locationTypes = await catalogApi.location.getType();
        console.log(locationTypes);
        this.setState({loading: false, locationTypes});
    };

    fetchTimeZone = async () => {
        this.setState({loading: true});
        const timeZones = await catalogApi.location.getTimeZone();
        console.log(timeZones);
        this.setState({loading: false, timeZones});
    };

    handleItemClick = async (e, {id}) => {
        const {locations, locationTypes, timeZones} = this.state;

        // для переключання нашого меню
        if (id === 'loc' && _.isEmpty(locations)) await this.fetchLocation();
        else if (id === 'type' && _.isEmpty(locationTypes)) await this.fetchLocationTypes();
        else if (id === 'zone' && _.isEmpty(timeZones)) await this.fetchTimeZone();

        this.setState({activeItem: id});
    };

    clickLocation = (e, {id}) => console.log(id);

    renderLocation = (location, index) => {
        return (
            <Segment id={index} key={'location ' + index}>
                <p>{location.name}</p>
                <Button id={index} content='Edit location' primary onClick={this.clickLocation}/>
            </Segment>
        )
    };

    renderLocationType = (locationType, index) => {
        return (
            <Segment id={index} key={'type ' + index}>
                <p>{locationType.name}</p>
                <Button id={index} content='Edit location type' primary onClick={this.clickLocation}/>
            </Segment>
        )
    };

    renderTimeZone = (timeZone, index) => {
        return (
            <Segment id={index} key={'timezone ' + index}>
                <p>{timeZone.value}</p>
            </Segment>
        );
    };

    render() {
        const {activeItem, locations, locationTypes, timeZones, loading} = this.state;

        return (
            loading ? <Dimmer active><Loader size='massive'>Loading</Loader></Dimmer> :
                <div>
                    <Header content='Location Page' as='h1'/>
                    <Menu fluid attached='top' tabular>

                        <Menu.Item name='Locations' id='loc' active={activeItem === 'loc'}
                                   onClick={this.handleItemClick}/>

                        <Menu.Item name='Type of locations' id='type' active={activeItem === 'type'}
                                   onClick={this.handleItemClick}/>

                        <Menu.Item name='Time zone' id='zone' active={activeItem === 'zone'}
                                   onClick={this.handleItemClick}/>
                    </Menu>

                    {activeItem === 'loc' && !_.isEmpty(locations) && locations.map(this.renderLocation)}
                    {activeItem === 'type' && !_.isEmpty(locationTypes) && locationTypes.map(this.renderLocationType)}
                    {activeItem === 'zone' && !_.isEmpty(timeZones) && timeZones.map(this.renderTimeZone)}
                </div>
        )
    }
}

LocationPage.propTypes = {};

const mapStateToProps = (state) => { // достает нужные поля из глобального состояния
    return ({});
};

connect(mapStateToProps)(LocationPage);
