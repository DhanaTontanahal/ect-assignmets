import React from 'react';
import { shallow } from 'enzyme';
import Table from "./Table";
import {findByTestAttr} from "./../../../../Utils"
import {stocks} from "./../../particles/test-data"
const setUp = (props = {}) => {
    
    const tableComponent = shallow(<Table sortedData={stocks} />);
    return tableComponent;
}

describe('Table component', () => {

    let tableComponent;

    beforeEach(() => {
        tableComponent = setUp();
    })

    it('It should render Table component without errors', () => {
        const wrapper = findByTestAttr(tableComponent,'eachTableRow')
        expect(wrapper.length).toBe(stocks.length);
    })



})
