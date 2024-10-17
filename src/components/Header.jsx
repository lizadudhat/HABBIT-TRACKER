import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className=" text-white py-3"style={{boxShadow:"3px 3px 4px #412774",backgroundColor:"#412774"}}>
      <div className="container d-flex align-items-center justify-content-center">
        <img
          src="https://www.mtoag.com/wp-content/uploads/2024/02/habitica.png" 
          alt="Logo"
          className="me-2"
          style={{ height: '70px',width:"200px",marginLeft:"0px" }} 
        />
      <h1> habbit tracker</h1>
       
      </div>
    </header>
  );
};

export default Header;
