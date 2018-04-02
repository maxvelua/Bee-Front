import React, {Component} from 'react';
import {Form, Message} from 'semantic-ui-react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class RegisterForm extends Component {
    state = {
        formData: {
            login: "",
            email: "",
            pass: "",
            name: "",
            surname: ""
        },
        loading: false,
        errors: {}
    };

    submit = async () => {
        try {
            this.setState({loading: true}); // ставит состояние на загрузку

            const {formData} = this.state;
            //console.log("Hello from submit: " + formData.login + ", " + formData.name + ", " + formData.email + ", " + formData.pass + ", " + formData.surname);

            const errors = this.validate(formData);
            if (!_.isEmpty(errors)) return this.setState({errors: errors}); // выходит из функции и приписывает ошибки

            await this.props.submit(formData); // вызывает функцию переданную при вызове компонента вродителе (HomePage)
            this.setState({loading: false, errors: {}}); // отменяет загрузку состояние на загрузку
        } catch (err) {
            // console.error(err);
            console.log(err.response.data);
            const {error} = err.response.data; // вытягивает дату ошибки из ответа от сервера
            this.setState({loading: false, errors: {global: error}}); // и приписывает ее в состояние ошибок в поле глобальных
        }
    };

    onFormFieldChange = (event, data) => this.setState({formData: {...this.state.formData, [data.name]: data.value}}); // изменяет значение состояния при изменении данных в поле формы

    validate = (data) => { // валидация данных из формы
        let errors = {};

        return errors;
    };

    render() {
        const {formData, loading, errors} = this.state;
        return (
            <div>
                {errors.global && <Message error header='Something went wrong!' content={errors.global}/>} {/* Если есть глобальные ошибки выводит сообщение об ошибках */}
                <Form loading={loading} onSubmit={this.submit}> {/* Смотрит на поле loading и меняет состояние формы, приписывает форме функцию на событие submit */}
                    <Form.Input required label='Login' fluid placeholder='Login'
                                id="login" name='login' value={formData.login} onChange={this.onFormFieldChange}/>
                    <Form.Input required label='Email' fluid placeholder='Email'
                                id="email" name='email' value={formData.email} onChange={this.onFormFieldChange}/>
                    <Form.Input required type='password' label='Password' fluid placeholder='Password'
                                id="pass" name='pass' value={formData.pass} onChange={this.onFormFieldChange}/>
                    <Form.Input required label='Name' fluid placeholder='Name'
                                id="name" name='name' value={formData.name} onChange={this.onFormFieldChange}/>
                    <Form.Input required label='Surname' fluid placeholder='Surname'
                                id="surname" name='surname' value={formData.surname} onChange={this.onFormFieldChange}/>
                    <Form.Button type='submit' className='registerAdminButton' fluid primary content='Go !'/>
                </Form>
            </div>
        );
    }
}

RegisterForm.propTypes = {
    submit: PropTypes.func.isRequired // декларирует ожидаемые параметры
};