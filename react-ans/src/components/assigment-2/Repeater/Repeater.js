import React from 'react'
import PropTypes from 'prop-types';

const Repeater = (props) => {
    return (
        <div>
            {
                props.option.map((item) => {
                    return <div key={item.id}>{item.name}</div>
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
