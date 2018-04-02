import React, {Component} from 'react';
import RegisterForm from '../../forms/RegisterForm';
import PropTypes from 'prop-types';
import {Grid, Header} from "semantic-ui-react";
import registerApi from "../../../api/register";

class RegisterEmployeePage extends Component {
    submit = async (credentials) => {
        const response = await registerApi.adminRegister(credentials); // вызывает функцию запроса на сервер
        console.log(response);
    };

    render() {
        return (
            <Grid centered container>
                <Grid.Row>
                    <Header content='Register employee page' as='h1'/>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column className='registerAdminForm'>
                        <RegisterForm submit={this.submit}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}


RegisterAdminPage.propTypes = {};

export default RegisterAdminPage;