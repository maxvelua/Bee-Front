import React from 'react'
import PropTypes from 'prop-types';

const Paragraf = (props) => <p>{props.name + " " + props.slovo}</p>;

Paragraf.propTypes = {
  name: PropTypes.string,
  slovo: PropTypes.string
};

export default Paragraf;
