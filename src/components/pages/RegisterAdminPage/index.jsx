import React, {Component} from 'react';
import RegisterForm from '../../forms/RegisterForm';
import PropTypes from 'prop-types';
import {Container, Grid, Header} from "semantic-ui-react";

export default class RegisterAdminPage extends Component {
    render() {
        return (
            <Grid centered container>
                <Grid.Row>
                    <Header content='Register admin page' as='h1'/>
                </Grid.Row>

                <Grid.Row>
                    {/*<Grid.Column width={5}/>*/}
                    <Grid.Column width={6} className='registerAdminForm'>
                        {/*<div class="ui column stackable center page grid">*/}
                        <RegisterForm/>
                    </Grid.Column>
                    {/*<Grid.Column width={5}/>*/}
                </Grid.Row>
            </Grid>
        )
    }
}


RegisterAdminPage.propTypes = {};