import React from 'react';
import '../App.css';

function Aside() {
  return (
    

      <div>

        <h2 id="sideHeader" style={{ paddingLeft: "90px" }}>Time and money</h2>

        <ul className="tag-cloud" style={{ paddingLeft: "150px" }}>
          <li><a href="/" rel="tag" className="w2">Course A</a></li>
          <li><a href="/" rel="tag" className="w8">Course B</a></li>
          <li><a href="/" rel="tag" className="w3">Course C</a></li>
          <li><a href="/" rel="tag" className="w6">Homeworks</a></li>
          <li><a href="/" rel="tag" className="w8">Sports</a></li>
          <li><a href="/" rel="tag" className="w2">Work</a></li>
          <li><a href="/" rel="tag" className="w2">Food</a></li>
          <li><a href="/" rel="tag" className="w6">Apartment</a></li>
          <li><a href="/" rel="tag" className="w9">Car</a></li>
          <li><a href="/" rel="tag" className="w2">Movies</a></li>
          <li><a href="/" rel="tag" className="w5">Laundry</a></li>
          <li><a href="/" rel="tag" className="w1">Friends</a></li>
          <li><a href="/" rel="tag" className="w2">Family</a></li>
          <li><a href="/" rel="tag" className="w4">Github</a></li>
        </ul>

      </div>

 


  );
}

export default Aside;