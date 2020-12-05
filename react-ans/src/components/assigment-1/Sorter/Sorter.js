import React, { useState, useEffect } from 'react'
import { sortBy } from "./sort-util";
import PropTypes from 'prop-types';

const Sorter = (props) => {
    const [sortedData, setSortedData] = useState([]);
    const dataToSort = props.options;
    const sortByOption1 = props.by1;
    const sortByOption2 = props.by2;

    useEffect(() => {
        const result = dataToSort.sortBy(function (o) { return [o[sortByOption1], o[sortByOption2]] });
        setSortedData([...result]);
    }, [dataToSort]);

    const sortByName = () => {
        const result = dataToSort.sortBy(function (o) { return o.name });
        setSortedData([...result]);
    }

    const sortById = () => {
        const resultById = dataToSort.sortBy(function (o) { return o.id });
        setSortedData([...resultById]);
    }

    const sortByPrice = () => {
       
        const resultByPrice = dataToSort.sortBy(function (o) { return -o.price });
        setSortedData([...resultByPrice]);
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

Sorter.propTypes = {
    options: PropTypes.array
};

Sorter.defaultProps = {
    options: []
}

export default Sorter







