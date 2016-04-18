import React from 'react';

const Safari = ({children}) => {
  return (
    <div className="react-osx-window">
      <div className="react-osx-titlebar">
        <div className="react-osx-buttons">
          <div className="react-osx-close-btn">
          </div>
          <div className="react-osx-minimize">
          </div>
          <div className="react-osx-zoom">
          </div>
        </div>

        <div className="react-osx-url-address"></div>
      </div>
      {children}
    </div>
  );
};

export default Safari;
