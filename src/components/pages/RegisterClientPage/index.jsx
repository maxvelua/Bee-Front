import React, {Component} from 'react';
import RegisterForm from '../../forms/RegisterClientForm';
import {Grid, Header} from "semantic-ui-react";
import registerApi from "../../../api/client";

class RegisterClientPage extends Component {
    submit = async (credentials) => {
        const response = await registerApi.register(credentials); // вызывает функцию запроса на сервер
        console.log(response);
    };

    render() {
        return (
            <Grid centered container>
                <Grid.Row>
                    <Header content='Register client page' as='h1'/>
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


RegisterClientPage.propTypes = {};

export default RegisterClientPage;