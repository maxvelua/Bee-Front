import React, {Component} from 'react';
import Paragraf from './Paragraf';
import PropTypes from 'prop-types';

class HomePage extends Component {
    state = {
        name: 'Вова'
    };

    componentDidMount = async () => {

    };

    render() {
        const {name} = this.state;

        return (
            <div>
                <Paragraf name={name} slovo='super'/>
            </div>
        );
    }
}

HomePage.propTypes = {
};

export default HomePage;
