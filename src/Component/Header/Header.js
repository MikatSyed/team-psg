import React from 'react';
import './Header.css'



const Header = () => {
    return (
        <div className="header">
            

            <nav class="navbar navbar-expand-lg navbar-dark  nav-bg">
            <h3 class="mr-auto nav-text" href="#">Team PSG</h3>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon "></span>
  </button>
  
  <div class="collapse navbar-collapse " id="navbarTogglerDemo01">
   
    <ul class="navbar-nav ml-auto mt-2 mt-lg-0 text-bold">
    <li class="nav-item active">
        <a class="nav-link " >Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link" href="#">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mr-5" href="#">Contact</a>
      </li>
      
    </ul>
    
  </div>
</nav>
          
        </div>
    );
};

export default Header;