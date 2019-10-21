import React, {useState} from 'react';
import GenerateCourse from './GenerateCourse';
import '../App.css';

function Course(props) {

  const [showComponent, setShowComponent] = useState(false);

  return (
    
      <div className="leftSideDown">
        <div className="leftSideDownLeft">
          <button onClick = {() => setShowComponent(!showComponent) }> <h3> Course {props.courseName} </h3> </button>

        </div>

        <div className="leftSideDownRight">
           {showComponent ?
            <GenerateCourse course={props.courseContent} /> :
            null
            }
        </div>
      </div>

      
   
  );
}
export default Course;




