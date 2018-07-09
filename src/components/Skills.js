import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-container' >

            <div className='mern-stack-wrapper' >
                <h5 className='mern-stack-header' >The MERN-Stack</h5>
                <ul>
                    <li className='list-item' s>React / Redux</li>
                    <li className='list-item' s>Node.js / Express</li>
                    <li className='list-item' s>mongoDB / mongoose</li>
                </ul>
            </div>
            <div className='API-wrapper' >
                <h5 className='API-header'>API Design</h5>
                <ul>
                    <li className='list-item'>Implementation & Documentation <br />of RESTful APIs</li>
                    <li className='list-item'>Creating Enpoint</li>
                    <li className='list-item'>Data Modelling and Validation<br /> using mongoose</li>
                </ul>
            </div>
            <div className='worklow-wrapper' >
                <h5 className='workflow-header'>Workflow</h5>
                <ul>
                    <li className='list-item' >Git Version Control</li>
                    <li className='list-item'>Agile Development</li>
                    <li className='list-item'>Kanban Methodology</li>
                </ul>
            </div>

            <div className='testing-wrapper' >
                <h5 className='testing-header' >Testing</h5>
                <ul>
                    <li className='list-item'>TDD / BDD Core Principles</li>
                    <li className='list-item'>Client- & Serverside Testing</li>
                    <li className='list-item'>Jest and Enzyme Frameworks</li>
                </ul>
            </div>

        </div>
    );
};

export default Skills;