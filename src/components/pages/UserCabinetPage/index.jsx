import React, {Component} from 'react';
import {Segment, Grid, Icon} from "semantic-ui-react";
import UserData from '../../../containers/userData';
import PropTypes from 'prop-types';

export default class UserCabinetPage extends Component {
    render() {
        return (
            <div>
                <Segment>
                    <Grid>
                            <Grid.Column width={16} textAlign='left'>
                                <UserData/>
                            </Grid.Column>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

UserCabinetPage.propTypes = {};
