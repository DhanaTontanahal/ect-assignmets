import React from 'react'

const Table = (props) => {
    let rows = props.sortedData.map((item, index) => {
        return <div key={item.id}>
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
                <tr data-test="eachTableRow">
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

        </div>
    })
    return (
        <React.Fragment>
            {rows}
        </React.Fragment>
    )
}


Table.propTypes = {

};

Table.defaultProps = {
}


export default Table
