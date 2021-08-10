import React from 'react';
import { NewMessage } from './NewMessage';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

test('New Message empty message', () => {

  const onAddMock = jest.fn();
  const preventDefaultMock = jest.fn();

  const newMessage = shallow(<NewMessage onAdd={onAddMock} />);

  const input = newMessage.find('input');
  expect(input.text()).toEqual('');

  expect(newMessage.state('error')).toEqual(false);

  input.simulate('change', {
    target: {name: 'message', value: ''}
  });

  expect(newMessage.state('error')).toEqual(true);

  input.simulate('change', {
    target: {name: 'message', value: 'Hello'}
  });

  expect(newMessage.state('error')).toEqual(false);

  const form = newMessage.find('form');

  expect(onAddMock.mock.calls).toEqual([]);
  expect(preventDefaultMock.mock.calls).toEqual([]);

  form.simulate('submit', {
    preventDefault:preventDefaultMock
  });

  expect(onAddMock.mock.calls[0][0].message).toBe('Hello');
  expect(preventDefaultMock.mock.calls.length).toEqual(1);
});
