import React, {Component} from 'react';
import {Header, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class IoTPage extends Component {
    state = {activeItem: 'sen'};

    handleItemClick = (e, {id}) => this.setState({activeItem: id});
    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Header content='IoT Page' as='h1'/>
                <Menu fluid attached='top' tabular>
                    <Menu.Item name='Sensors' id='sen' active={activeItem === 'sen'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Arnia scales' id='scale' active={activeItem === 'scale'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='GPS' id='gps' active={activeItem === 'gps'}
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
