import React from 'react';
import CircumIcon from '@klarr-agency/circum-icons-react';

const Header = () => {
  return (
    <header>
      <div className="search-bar">
        <CircumIcon className="search-icon" name="search" />
        Rechercher...
      </div>
    </header>
  );
};

export default Header;
