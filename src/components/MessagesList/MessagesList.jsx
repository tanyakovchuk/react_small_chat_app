import React from 'react';
import './MessagesList.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const MessagesList = ({ messages }) => {
  const lastIndexOfInterlocutor = messages.map(message => message.user)
    .lastIndexOf('second');

  return (
    <div className="App__content">
      {messages.map((element, index) => (
        <div
          className={
            classNames('App__content-element',
              { 'App__content-element--right': element.user === 'first' })
          }
          key={element.id}
        >
          <img
            src="./images/1.jpg"
            alt="user_icon"
            className={
              classNames('App__content-img',
                { 'App__content-img--active':
                  index === lastIndexOfInterlocutor
                  && element.user === 'second' })
            }
          />
          <span>
            <p className="App__content-message">
              {element.message}
            </p>
            <p className="App__content-date">
              {element.date}
            </p>
          </span>
        </div>
      ))}
    </div>
  );
};

MessagesList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      user: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
