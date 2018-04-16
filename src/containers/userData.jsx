import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class userData extends Component {

    render() {
        const {userName, userSurname, userEmail} = this.props;
        console.log(userName + ", " + userSurname + ", " + userEmail);
        return (
            <div>
                <p>name: {userName}</p>
                <p>surname: {userSurname}</p>
                <p>email: {userEmail}</p>
            </div>
        );
    }
}

userData.propTypes = {
    userName: PropTypes.string.isRequired,
    userSurname: PropTypes.string.isRequired,
    userEmail: PropTypes.string.isRequired
};

const mapStateToProps = (state) => { // достает нужные поля из глобального состояния
    return ({
        userName: state.user.name,
        userSurname: state.user.surname,
        userEmail: state.user.email
    });
};

export default connect(mapStateToProps)(userData);
