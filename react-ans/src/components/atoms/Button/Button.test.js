import React from 'react';
import { shallow } from 'enzyme';
import Button from "./Button";
import {findByTestAttr} from "./../../../../Utils"

const setUp = (props = {}) => {
    const buttonComponent = shallow(<Button buttonLabel={"test button"} />);
    return buttonComponent;
}

describe('Button component', () => {

    let buttonComponent;

    beforeEach(() => {
        buttonComponent = setUp();
    })

    it('It should render Button component without errors', () => {
        const wrapper = findByTestAttr(buttonComponent,'button')
        expect(wrapper.length).toBe(1);
    })



})
