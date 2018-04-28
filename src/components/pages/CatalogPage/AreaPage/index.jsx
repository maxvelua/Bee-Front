import React, {Component} from 'react';
import {Header, Segment, Button, Dimmer, Loader} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../../HomePage/index";
import catalogApi from "../../../../api/catalog";

export default class AreaPage extends Component {
    state = {
        loading: true,
        areas: []
    };

    componentDidMount = async () => {
        this.setState({loading: true});
        const areas = await catalogApi.area.get();
        console.log(areas);
        this.setState({loading: false, areas});
    };

    renderArea = (area, index) => {
        return (
                <h5 id={index} key={'area ' + index}> {area.name} </h5>
        )
    };

    render() {
        const {areas, loading} = this.state;

        return (
            loading ? <Dimmer active><Loader size='massive'>Loading</Loader></Dimmer> :
            <div>
                <Header>Hello it's me Area Page</Header>

                <Segment>
                {areas.map(this.renderArea)}
                </Segment>
            </div>
        );
    }
}

AreaPage.propTypes = {

};
