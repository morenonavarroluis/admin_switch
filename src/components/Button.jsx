// src/components/Button.jsx
import React from 'react';


function Button({ children, onClick, variant = 'primary', ...props }) {
  return (
    <button className={`button ${variant}`} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

export default Button;