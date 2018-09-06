import {expect} from 'chai';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow, mount} from 'enzyme';
import App from './App';
import SearchBar from './components/search-bar';
import Container from "./components/container";
import NameCard from './components/name-pokecard';
import {spy} from 'sinon';


it('TypeCard and NameCard should not render initially', ()=> {
    const wrapper = mount(<App />);
    expect(wrapper.find('SearchBar')).to.have.lengthOf(1);
    expect(wrapper.find('TypeCard')).lengthOf(0);
    expect(wrapper.find('NameCard')).to.have.lengthOf(0);
});

it("state url should change to 'Type or Id' on button click", ()=> {
    const wrapper = shallow(<SearchBar />);
    wrapper.setState({ input: 'test1' });
    wrapper.find('#change-url-btn').simulate('click');
    wrapper.find('.dropdown-item').simulate('click');
    expect(wrapper.state('url')).equal('Type or Id');
});

it('message state should set to true on 404 response from API', (done)=> {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    const wrapper = shallow(<SearchBar />);
    wrapper.setState({ input: 'wrongPokemonName' });
    wrapper.find('#api-call-button').simulate('click');
    setTimeout(() => {
        done();
        expect(wrapper.state('message')).equal('0 results found');
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    }, 10000);
});

it('message state should reset to false on 200 response from API', ()=> {
    const wrapper = shallow(<SearchBar />);
    wrapper.setState({ message: false });
    wrapper.setState({ input: '1' });
    wrapper.find('#api-call-button').simulate('click');
    expect(wrapper.state('message')).equal(false);
});


it('showPokeDoxCard should be called after fetching data from API', (done)=> {
    spy(Container.prototype, 'showPokeDoxCard');
    const wrapper = shallow(<Container />);
    const search = wrapper.find('SearchBar').shallow();
    search.setState({input:'1'});
    search.find('#api-call-button').simulate('click');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    setTimeout(() => {
        done();
        expect(spy(Container.prototype.showPokeDoxCard)).toHaveBeenCalled();
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000;
    }, 10000);
});

it('cardType state of Container should change to Name or ID', (done)=> {
    const wrapper = shallow(<Container />);
    const search = wrapper.find('SearchBar').shallow();
    search.setState({input:'1'});
    search.find('#api-call-button').simulate('click');
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 20000;
    setTimeout(() => {
        done();
        expect(wrapper.state('cardType')).equal('Name or Id');
    }, 10000);
});
