import React, {Component} from 'react';
import LoginForm from '../../forms/LoginForm';
import PropTypes from 'prop-types';
import {Grid, Header} from "semantic-ui-react";
import {login} from '../../../actions/auth';
import {connect} from 'react-redux';

class LoginPage extends Component {
    submit = async (credentials) => {
        await this.props.login(credentials);
        this.props.history.push('/');
    }; // вызывает функцию запроса на сервер

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


LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired,
};

export default connect(null, {login})(LoginPage);
