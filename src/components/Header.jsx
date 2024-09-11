import React from 'react';
import PropTypes from 'prop-types'

function Header({text="kiwa", bgColor="#da6fa4", textColor="white"}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor
  }
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header;


