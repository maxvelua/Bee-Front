import React, {Component} from 'react';
import LoginForm from '../../forms/LoginForm';
import PropTypes from 'prop-types';
import {Grid, Header} from "semantic-ui-react";
import authApi from '../../../api/auth';

class LoginPage extends Component {
    submit = async (credentials) => {
        const response = await authApi.login(credentials); // вызывает функцию запроса на сервер
        console.log(response);
    };

    render() {
        return (
            <Grid centered container>
                <Grid.Row>
                    <Header content='Login page' as='h1'/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column className='registerAdminForm'>
                        <LoginForm submit={this.submit}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


LoginPage.propTypes = {};

export default LoginPage;