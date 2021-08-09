import React from 'react';
import './App.scss';
import { MessagesList } from './components/MessagesList/MessagesList';
import { NewMessage } from './components/NewMessage/NewMessage';

class App extends React.Component {
  state = {
    messages: [
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
    ],
  }

  addMessage = ({ message, user, date }) => {
    this.setState(state => ({
      messages: [...state.messages, {
        message,
        user,
        date,
        id: state.messages.length + 1,
      }],
    }));
  }

  render() {
    const { messages } = this.state;

    return (
      <div className="App">
        <div className="App__info">
          <img
            className="App__info-logo"
            src="./images/logo.jpg"
            alt="logo"
          />
          <h1 className="App__info-title">
            Test work chat
          </h1>
        </div>

        <MessagesList messages={messages} />

        <NewMessage onAdd={this.addMessage} />
      </div>
    );
  }
}

export default App;
