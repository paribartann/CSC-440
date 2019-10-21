import React from 'react';
import '../App.css';
import Logo from '../pari.png';



const  Header = () => {

  const saySubmitted = () => alert('Subscribed!');
  
  return (
    <div className="Course">

      <header className="headerElement">
        <a href="/"><h1 >School Activities Tracker</h1></a>
        <img src={Logo} alt="header logo" />
      </header>

      <div className="semester">
        <a href="/"><h2>Fall</h2></a>
        <a href="/"><h2>Spring</h2></a>
        <a href="/"><h2>Summer</h2></a>
      </div>


      <form action="" method="get" className="form-example" onSubmit={saySubmitted}>

        <div className="form-example">
          <label >Enter your name:
          <input type="text" name="name" required />
          </label>
        </div>

        <div className="form-example">
          <label>Enter your email:
          <input type="email" name="email" required />
          </label>
        </div>

        <div className="form-example">
          <input type="submit" value="Subscribe!" />
        </div>

      </form>

    </div>
  );
}

export default Header;