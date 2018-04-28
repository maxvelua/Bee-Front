import React, {Component} from 'react';
import {Header, Segment, Menu, Dimmer, Loader} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";
import catalogApi from "../../../../api/catalog";
import LocationPage from "../LocationPage";
import {connect} from "react-redux";

export default class RegionPage extends Component {
    state = {
        loading: true,
        activeItem: 'name',
        regions: []
    };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    componentDidMount = async () => {
        this.setState({loading: true});
        const regions = await catalogApi.region.get();
        console.log(regions);
        this.setState({loading: false, regions});
    };

    renderRegion = (region, index) => {
        return (
            <h3 id={index} key={'region' + index}>
                <p>{region.name}</p>
                <p>Geographic coordinate: {region.lat}, {region.lng}</p>
            </h3>
        )
    };


    render() {
        const {regions, loading, activeItem} = this.state;

        return (
            loading ? <Dimmer active><Loader size='massive'>Loading</Loader></Dimmer> :
                <div>
                    <Menu pointing secondary>
                        <Menu.Item name='name' active={activeItem === 'name'} onClick={this.handleItemClick} />
                        <Menu.Item name='coordinates' active={activeItem === 'coordinates'} onClick={this.handleItemClick} />
                    </Menu>

                    <Segment>
                    {regions.map(this.renderRegion)}
                    </Segment>
                </div>
        );
    }
}

RegionPage.propTypes = {

};

const mapStateToProps = (state) => { // достает нужные поля из глобального состояния
    return ({});
};

connect(mapStateToProps)(RegionPage);
