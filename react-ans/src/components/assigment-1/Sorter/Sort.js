import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import { sorter } from "./sorter";
import Button from "../../atoms/Button/Button";
import Table from "../../molecules/Table/Table";

const Sort = (props) => {
    const [sortedData, setSortedData] = useState([]);
    const dataToSort = props.options;

    useEffect(() => {
        const result = sorter(props.options, props.sortByOptions);
        setSortedData([...result]);
    }, [dataToSort]);

    const sortBy = () => {
        const result = sorter(props.options, ["-id"]);
        setSortedData([...result]);
    }

    const sortByAsc = () => {
        const result = sorter(props.options, ["id"]);
        setSortedData([...result]);
    }

    const sortAscByPrice = () => {
        const result = sorter(props.options, ["price"]);
        setSortedData([...result]);
    }

    const sortDescByPrice = () => {
        const result = sorter(props.options, ["-price"]);
        setSortedData([...result]);
    }

    const sortAscByPriceThenId = () => {
        const result = sorter(props.options, ["price", "id"]);
        setSortedData([...result]);
    }

    return (
        <React.Fragment>
            <Table data-test="sortSupportTable" sortedData={sortedData}></Table>
            <Button onClick={sortByAsc} buttonLabel="Sort ascending by id"></Button>
            <Button onClick={sortBy} buttonLabel="Sort descending by id"></Button>
            <Button onClick={sortDescByPrice} buttonLabel="Sort descending by price"></Button>
            <Button onClick={sortAscByPrice} buttonLabel="Sort ascending by price"></Button>
            <Button onClick={sortAscByPriceThenId} buttonLabel="Sort ascending by price,then id"></Button>
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







