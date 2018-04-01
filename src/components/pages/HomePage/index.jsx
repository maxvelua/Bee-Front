import React, {Component} from 'react';
import Paragraf from './Paragraf';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

class HomePage extends Component {
    state = {
        name: 'Вова',
        another: false

        // this.state.name = '123'; !!!!
        // this.setState({name: '123'}); good
    };

    componentDidMount = async () => {

    };

    changeAnother = () => this.setState({another: !this.state.another});

    getAnotherParagraf = () => {
        const {name} = this.state;

        return (
            <Paragraf name={name} slovo='ne super'/>
        );
    };

    render() {
        const {name, another} = this.state;

        return (
            <div>
                {!another ? <Paragraf name={name} slovo='super'/> : this.getAnotherParagraf()}
                <Button content='Change' primary onClick={this.changeAnother}/>
            </div>
        );
    }
}

HomePage.propTypes = {

};

export default HomePage;
