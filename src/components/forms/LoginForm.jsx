import React, {Component} from 'react';
import {Form, Message} from 'semantic-ui-react';
import _ from 'lodash';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
    state = {
        formData: {
            login: "",
            pass: ""
        },
        loading: false,
        errors: {}
    };

    submit = async () => {
        try {
            this.setState({loading: true}); // ставит состояние на загрузку

            const {formData} = this.state;

            const errors = this.validate(formData);
            if (!_.isEmpty(errors)) return this.setState({errors: errors}); // выходит из функции и приписывает ошибки

            await this.props.submit(formData); // вызывает функцию переданную при вызове компонента вродителе (HomePage)
            // this.setState({loading: false, errors: {}}); // отменяет загрузку состояние на загрузку
        } catch (err) {
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
                    <Form.Input required label='Login' fluid placeholder='Login or email'
                                id="login" name='login' value={formData.login} onChange={this.onFormFieldChange}/>
                    <Form.Input type='password' required label='Password' fluid placeholder='Password'
                                id="pass" name='pass' value={formData.pass} onChange={this.onFormFieldChange}/>
                    <Form.Button type='submit' className='registerAdminButton' fluid primary content='Go !'/>
                </Form>
            </div>
        ); // для функций onChange обязательно приписывай prop'ы id, name. Чтобы потом найти нужное поле в состоянии для его изменения
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired // декларирует ожидаемые параметры
};