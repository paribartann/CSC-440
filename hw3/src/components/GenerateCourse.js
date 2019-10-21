import React from 'react';
import '../App.css';


function GenerateCourse(props) {
    return (
        <div>
            <ul>
                {(props.course).map((element) =>
                <li>{element}</li>
                )}
            </ul>
        </div>
    );
}


export default GenerateCourse;