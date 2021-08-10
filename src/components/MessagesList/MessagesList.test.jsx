import React from 'react';
import renderer from 'react-test-renderer';
import {MessagesList} from './MessagesList';

test('MessagesList render', () => {
  
  const testMessages = [
    {
      id: 1,
      user: 'first',
      message: 'Hey here!',
      date: '19:10:05',
    },
    {
      id: 2,
      user: 'second',
      message: 'Hi! How are you?',
      date: '19:16:05',
    },
    {
      id: 3,
      user: 'second',
      message: 'Nice to see you here!',
      date: '19:17:50',
    },
  ];
  
  const component = renderer.create(
    <MessagesList messages={testMessages} />
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
})
