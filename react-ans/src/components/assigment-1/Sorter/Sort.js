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

  
    const sortBy = () => {
        const result = sorter(props.options , [ "-id"] );
        setSortedData([...result]);
    }

    const sortByAsc = () => {
        const result = sorter(props.options , [ "id"] );
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
             <button onClick={sortByAsc}>Sort ascending by id</button>
            <button onClick={sortBy}>Sort descending by id</button>
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







