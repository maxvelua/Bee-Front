import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
        data: {},
        loading: false,
        errors: {}
    };

    render() {
        const {data} = this.state;
        return (
            <Form>
                <Form.Input required label='Login' fluid placeholder='Login or email' id="login" value={data.login}/>

                <Form.Input required label='Password' fluid placeholder='Password' id="password" value={data.pass}/>

                <Form.Input label='Name' fluid placeholder='Name' id="name" value={data.name}/>

                <Form.Input label='Surname' fluid placeholder='Surname' id="surname" value={data.surname}/>

                <Form.Button className='registerAdminButton' fluid primary>Ok</Form.Button>
            </Form>
        );
    }
}

LoginForm.propTypes = {};