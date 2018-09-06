import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expect} from 'chai';
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

import App from './App';
import Search from './components/search-bar';


it('TypeCard and NameCard should not render initially', ()=> {
    const wrapper = mount(<App />);
    expect(wrapper.find('Search')).to.have.lengthOf(1);
    expect(wrapper.find('TypeCard')).lengthOf(0);
    expect(wrapper.find('NameCard')).to.have.lengthOf(0);
});

it("state url should change to 'Type or Id' on button click", ()=> {
    const wrapper = shallow(<Search />);
    wrapper.setState({ input: 'test1' });
    wrapper.find('#change-url-btn').simulate('click');
    wrapper.find('.dropdown-item').simulate('click');
    expect(wrapper.state('url')).equal('Type or Id');
});

it('message state should set to true on 404 response from API', (done)=> {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    const wrapper = shallow(<Search />);
    wrapper.setState({ input: 'wrongPokemonName' });
    wrapper.find('#api-call-button').simulate('click');
    setTimeout(() => {
        done();
        expect(wrapper.state('message')).equal(true);
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    }, 10000);
});


it('message state should reset to false on 200 response from API', ()=> {
    const wrapper = shallow(<Search />);
    wrapper.setState({ message: false });
    wrapper.setState({ input: '1' });
    wrapper.find('#api-call-button').simulate('click');
    expect(wrapper.state('message')).equal(false);
});
