import React, {Component} from 'react';
import {Header, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class EmployeesPage extends Component {
    state = {activeItem: 'emp'};

    handleItemClick = (e, {id}) => this.setState({activeItem: id});
    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Header content='Employees Page' as='h1'/>
                <Menu fluid attached='top' tabular>
                    <Menu.Item name='Employees' id='emp' active={activeItem === 'emp'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Teams' id='team' active={activeItem === 'team'}
                               onClick={this.handleItemClick}/>
                </Menu>
                <Segment attached='bottom'>
                    {activeItem}
                </Segment>

            </div>
        )
    }
}

EmployeesPage.propTypes = {

};
