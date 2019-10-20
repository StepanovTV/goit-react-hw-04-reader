import React from 'react';
import PropTypes from 'prop-types';
import styles from './Counter.module.css';

const Counter = ({ length, items }) => {
  return (
    <p className={styles.counter}>
      {items} / {length}
    </p>
  );
};

Counter.propTypes = {
  length: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
};

export default Counter;
