import React from 'react'
import PropTypes from 'prop-types';

const Repeater = (props) => {
    return (
        <div data-test="repeaterComponent"> 
            {
                props.option.map((item) => {
                    return <div data-test="repeaterItem" key={item.id}>{item.name}</div>
                })
            }
        </div>
    )
}

Repeater.propTypes = {
    option: PropTypes.array
};

Repeater.defaultProps = {
    option:[]
}
export default Repeater
