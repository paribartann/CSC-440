import React from 'react';
import '../App.css';


function Navigator() {
    return (

        <div className="leftSideUp">
            <nav>
                <h2 id="navHeader">Navigation menu</h2>
                <ul style={{ display: 'flex' }}>
                    <a href="/" id="classi">Freshman</a>
                    <a href="/" id="classi">Sophomore</a>
                    <a href="/" id="classi">Junior</a>
                    <a href="/" id="classi">Senior</a>
                </ul>
            </nav>

        </div>
    );
}

export default Navigator;