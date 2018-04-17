import React, {Component} from 'react';
import {Header, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";

export default class IoTPage extends Component {
    state = {activeItem: 'iot'};

    handleItemClick = (e, {id}) => this.setState({activeItem: id});
    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Header content='IoT Page' as='h1'/>
                <Menu fluid attached='top' tabular>
                    <Menu.Item name='IoT' id='iot' active={activeItem === 'iot'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='IoT type' id='type' active={activeItem === 'type'}
                               onClick={this.handleItemClick}/>
                </Menu>

                <Segment attached='bottom'>
                    {activeItem}
                </Segment>

            </div>
        )
    }
}

IoTPage.propTypes = {

};
