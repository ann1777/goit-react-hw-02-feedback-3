import React from 'react';
import { Container } from './PageContainer.styled';
import PropTypes from 'prop-types';

export const PageContainer = ({ children }) => {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};

PageContainer.propTypes = {
   children: PropTypes.any.isRequired,
};
