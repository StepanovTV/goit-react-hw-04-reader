import React from 'react';
import PropTypes from 'prop-types';

const PageNotFound = ({ history }) => {
  history.replace({
    pathname: '/reader',
    search: '?item=1',
  });

  return <h1>Error 404 not found</h1>;
};

PageNotFound.propTypes = {
  history: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

export default PageNotFound;
