import React from 'react'

const Button = (props) => {
    return (
        <React.Fragment>
            <button data-test="button" className={props.className} onClick={props.onClick}>{props.buttonLabel}</button>
        </React.Fragment>
    )
}

Button.propTypes = {

};

Button.defaultProps = {
    buttonLabel: "the button"
}


export default Button

