import React from 'react';
import '../homepage/homepage.style.scss';
import Directory from '../../directory/directory.compomemts';

const homePage = ({history}) => {
  return (
    <div className='homePage'>
      <Directory />
    </div>
  );
};

export default homePage;
