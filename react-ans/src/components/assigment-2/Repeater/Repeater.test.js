import React from 'react';
import { shallow } from 'enzyme';
import Repeater from "./Repeater";
import {findByTestAttr} from "./../../../../Utils"

const setUp = (props = {}) => {
    const data = [{ id: 1001, name: 'A' }, { id: 1002, name: 'B' }, { id: 1003, name: 'C' }];
    const repeaterComponent = shallow(<Repeater option={data} />);
    return repeaterComponent;
}

describe('Repeater component', () => {

    let repeaterComponent;

    beforeEach(() => {
        repeaterComponent = setUp();
    })
    it('It should render Repeater  without errors', () => {
        const wrapper = findByTestAttr(repeaterComponent,'repeaterComponent')
        expect(wrapper.length).toBe(1);
    })

    it('It should render Repeater items without errors', () => {
        const wrapper = findByTestAttr(repeaterComponent,'repeaterItem')
        expect(wrapper.length).toBe(3);
    })



})
