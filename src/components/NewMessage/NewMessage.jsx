import React from 'react';
import './NewMessage.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export class NewMessage extends React.Component {
  state = {
    message: '',
    user: '',
    date: '',
    error: false,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    const date = new Date().toLocaleTimeString();

    this.setState({
      [name]: value,
      user: 'first',
      date,
      error: !value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { onAdd } = this.props;
    const { message } = this.state;

    this.setState({
      error: !message,
    });

    if (!message) {
      return;
    }

    onAdd(this.state);
    this.setState({
      message: '',
    });
  };

  render() {
    const { message, error } = this.state;

    return (
      <form
        className="App__form"
        onSubmit={this.handleSubmit}
      >
        <input
          type="text"
          name="message"
          className={
            classNames('App__form-input',
              { 'App__form-input--active': message !== '' })
          }
          placeholder="Type a message ..."
          value={message}
          onChange={this.handleChange}
        />
        <button
          className={
            classNames('App__form-btn',
              { 'App__form-btn--active': message !== '' })
          }
          type="submit"
        >
          Send
        </button>
        <div className={
          classNames('App__form-warning',
            { 'App__form-error': error })
        }
        >
          Please enter your message
        </div>
      </form>
    );
  }
}

NewMessage.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
