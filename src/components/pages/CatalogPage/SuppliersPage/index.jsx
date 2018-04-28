import React, {Component} from 'react';
import {Dimmer, Header, Loader, Menu, Segment} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";
import catalogApi from '../../../../api/catalog';
import _ from 'lodash';

export default class SuppliersTypesSuppliersPage extends Component {
    state = {
        activeItem: 'Location',
        loading: true,
        suppliers: [],
    };

    handleItemClick = (e, {id}) => this.setState({activeItem: id});

    componentDidMount = async () => this.fetchSuppliers();

    fetchSuppliers = async () => {
        this.setState({loading: true});
        const suppliers = await catalogApi.suppliers.get("All");
        console.log(suppliers);
        this.setState({loading: false, suppliers});
    };

    filterSuppliers = (type) => this.state.suppliers.filter(supplier => supplier.sup === type);

    renderSuppliers = (supplier, index) => <Segment id={index} key={'supplier ' + index} content={supplier.name}/>;

    render() {
        const {activeItem, suppliers, loading} = this.state;

        return (
            loading ? <Dimmer active><Loader size='massive'>Loading</Loader></Dimmer> :
            <div>
                <Header content='Suppliers types/suppliers Page' as='h1'/>
                <Menu fluid attached='top' tabular>
                    <Menu.Item name='Location Owner' id='Location' active={activeItem === 'Location'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Queen breeder' id='Queen' active={activeItem === 'Queen'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Beehive supplier' id='Beehive' active={activeItem === 'Beehive'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Box Supplier' id='Box' active={activeItem === 'Box'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Sensor Supplier' id='Sensor' active={activeItem === 'Sensor'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Pallet Supplier' id='Pallet' active={activeItem === 'Pallet'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Colony Supplier' id='Colony' active={activeItem === 'Colony'}
                               onClick={this.handleItemClick}/>
                    <Menu.Item name='Transportation Supplier' id='Transportation' active={activeItem === 'Transportation'}
                               onClick={this.handleItemClick}/>
                </Menu>

                {!_.isEmpty(suppliers) && this.filterSuppliers(activeItem).map(this.renderSuppliers)}

            </div>
        )
    }
}

SuppliersTypesSuppliersPage.propTypes = {

};
