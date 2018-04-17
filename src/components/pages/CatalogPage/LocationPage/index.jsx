import React, {Component} from 'react';
import {Header, Grid, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";

export default class LocationPage extends Component {
    state = {activeItem: 'loc'};

    handleItemClick = (e, {id}) => this.setState({activeItem: id});
    render() {
        const {activeItem} = this.state;

        return (
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

                <Segment attached='bottom'>
                    {activeItem}
                </Segment>

            </div>
        )
    }
}

LocationPage.propTypes = {};
