import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <React.Fragment>
            <button data-test="button" className={props.className} onClick={props.onClick}>{props.buttonLabel}</button>
        </React.Fragment>
    )
}

Button.propTypes = {
    buttonLabel:PropTypes.string
};

Button.defaultProps = {
    buttonLabel: "the button"
}


export default Button

