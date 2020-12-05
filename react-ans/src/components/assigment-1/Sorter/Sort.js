import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import {sorter} from "./sorter";

const Sort = (props) => {
    const [sortedData, setSortedData] = useState([]);
    const dataToSort = props.options;

    useEffect(() => {
        const result= sorter(props.options , props.sortByOptions );
        setSortedData([...result]);
    }, [dataToSort]);

    const sortByName = () => {
        const result = sorter(props.options , ["name"] );
        setSortedData([...result]);
    }

    const sortById = () => {
        const result = sorter(props.options , ["id"] );
        setSortedData([...result]);
    }

    const sortByPrice = () => {
        const result = sorter(props.options , ["price"] );
        setSortedData([...result]);
    }

    return (
        <React.Fragment>
            {
                sortedData.map((item, index) => {
                    return <table key={item.id}>
                        {
                            (index == 0) ?
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                    </tr>

                                </thead>
                                : null
                        }
                        <tbody>
                            <tr>
                                <td>
                                    {item.id}
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                            </tr>
                        </tbody>

                    </table>
                })
            }
            <button onClick={sortByName}>Sort by name</button>
            <button onClick={sortById}>Sort by id</button>
            <button onClick={sortByPrice}>Sort by price</button>
        </React.Fragment>
    )
}

Sort.propTypes = {
    options: PropTypes.array
};

Sort.defaultProps = {
    options: []
}

export default Sort







