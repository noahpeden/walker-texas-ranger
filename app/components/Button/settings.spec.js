import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';

import Header from './Header';

describe('<Settings />', () => {
    it('should display a two div tags', ()=> {
      const wrapper = shallow(<Settings/>);
      expect(wrapper.find('div')).to.have.length(2);
    });

    it('should display a single div tag', ()=> {
      const wrapper = shallow(<Header/>);
      expect(wrapper.find('div')).to.have.length(1);
    });
  it('should trigger our logStuff function', ()=> {
    const logStuff = sinon.spy();
    const wrapper = mount(<Button handleClick={logStuff}/>);
    wrapper.simulate('click');
    expect(logStuff.calledOnce).to.equal(true);
  })
});
