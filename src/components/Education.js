import React from 'react';
import './Education.css'

const Education = () => {
    return (
        <div className='education-container'>
            <div className='education-item'>
                <h4 className='education-item-title font-weight-bold'>lambdaschool</h4>
                <h6 className="education-item-subtitle font-italic">Academy of Computer Science</h6>
                <p className='education-item-description' >Comprehensive Curriculum on Computer Science and Web Development</p>
                <ul className='education-item-list'>
                    <li className="education-item-list-item">Training in a production-like environment</li>
                    <li className="education-item-list-item">Vanilla JavaScript with latest features (ES6)</li>
                    <li className="education-item-list-item">MERN-Stack: React, Node, Express & mongoDB</li>
                    <li className="education-item-list-item">Data Structures and Algortighms</li>
                    <li className="education-item-list-item">Theory of Computation, Processes, Graphs, System Calls & Scheduling</li>
                    <li className="education-item-list-item">Security/Cellular Automata</li>
                </ul>
            </div>
        </div>
    );
};

export default Education;