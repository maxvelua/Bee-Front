import React, {Component} from 'react';
import {Header, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";

export default class SuppliersTypesSuppliersPage extends Component {
    state = {activeItem: 'loc'};

    handleItemClick = (e, {id}) => this.setState({activeItem: id});
    render() {
        const {activeItem} = this.state;

        return (
            <div>
                <Header content='Suppliers types/suppliers Page' as='h1'/>
                <Menu fluid attached='top' tabular>
                    <Menu.Item name='Location Owner' id='loc' active={activeItem === 'loc'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Queen breeder' id='breed' active={activeItem === 'breed'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Equipment supplier' id='equip' active={activeItem === 'equip'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Colony supplier' id='colony' active={activeItem === 'colony'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Transportation Supplier' id='supp' active={activeItem === 'supp'}
                               onClick={this.handleItemClick}/>
                </Menu>

                <Segment attached='bottom'>
                    {activeItem}
                </Segment>

            </div>
        )
    }
}

SuppliersTypesSuppliersPage.propTypes = {

};
