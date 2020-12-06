import React from 'react';
import { shallow } from 'enzyme';
import Sort from "./Sort";
import {findByTestAttr} from "./../../../../Utils"
import {stocks}from "./../../particles/test-data";

const setUp = (props = {}) => {
    const sortComponent = shallow(<Sort options={stocks}  sortByOptions={["-price"]} />);
    return sortComponent;
}
describe('Sort component', () => {

    let sortComponent;

    beforeEach(() => {
        sortComponent = setUp();
    })
    
    it('It should render Sort component items without errors', () => {
        const wrapper = findByTestAttr(sortComponent,'sortSupportTable')
        expect(wrapper.length).toBe(1);
    })



})
