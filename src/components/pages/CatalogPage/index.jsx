import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import HomePage from "../HomePage";

export default class CatalogPage extends Component {
    render() {
        return (
            <div>
                <Header>Hello it's me Catalog Page</Header>
            </div>
        );
    }
}

CatalogPage.propTypes = {

};
