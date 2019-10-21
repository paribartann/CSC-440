import React from 'react';
import '../App.css';
import Course from './Course';
import Navigator from './Navigator';
import Aside from './Aside';

function Main() {
    return (
        <div className="mainContent">
            <div className="leftSide">
                <Navigator />
                <header>
                  <h2 id="rightSideHeader">Courses</h2>
                </header>
                <Course  courseName={'A'} courseContent={courseA} />
                <Course  courseName={'B'} courseContent={courseB} />
                <Course  courseName={'C'}  courseContent={courseC} />
            </div>

            <div className="rightSide">
                <Aside />
            </div>


        </div>
    );
}

const courseA = [
    'A for Astronomy!'
];

const courseB = [
   'Course B',
    'Basic programming concepts',
    'Datatypes',
    'Loops',
    'Branches'
]

const courseC = [
    'Basic math skills',
     'Mostly algebra',
     'Polynomials',
     'Find the roots',
     'Multiply polynomials',
     'Rational polynomials'
 ]


export default Main;