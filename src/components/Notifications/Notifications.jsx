import React from 'react';
import { Notific } from './Notification.styled';
import PropTypes from 'prop-types';

export const Notification = ({ msg }) => {
  return <Notific Notification>{msg}</Notific>;
};

Notification.propTypes = {
  msg: PropTypes.string.isRequired,
};
