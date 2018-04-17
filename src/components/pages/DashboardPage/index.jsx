import React, {Component} from 'react';
import {Header} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class DashboardPage extends Component {
    render() {
        return (
            <div>
                <Header>Hello it's me Dashboard Page</Header>
            </div>
        );
    }
}

DashboardPage.propTypes = {

};
