import React from 'react';
import PropTypes from 'prop-types';
// import styles from './CommonButton.module.css'; // Import your CSS module

const CommonButton = ({ label, onClick, variant, disabled }) => {
  // Choose a CSS class based on the variant prop
//   const buttonClass = variant === 'primary' ? styles.primaryButton : styles.secondaryButton;

  return (
    <button
    //   className={`${styles.commonButton} ${buttonClass}`}
      onClick={onClick}
    //   disabled={disabled}
    >
      {label}
    </button>
  );
};

CommonButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  disabled: PropTypes.bool,
};

CommonButton.defaultProps = {
  variant: 'primary',
  disabled: false,
};

export default CommonButton;
