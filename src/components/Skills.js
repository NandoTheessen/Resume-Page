import React from 'react';
import './Skills.css'

const Skills = () => {
    return (
        <div className='skills-container' >
            <div className='mern-stack-wrapper' >
                <h5 className='mern-stack-header' >The MERN-Stack</h5>
                <ul>
                    <li>React / Redux</li>
                    <li>Node.js / Express</li>
                    <li>mongoDB / mongoose</li>
                </ul>
            </div>
            <div className='API-wrapper' >
                <h5 className='API-header'>API Design</h5>
                <ul>
                    <li>Implementation & Documentation of RESTful APIs</li>
                    <li>Creating Enpoint</li>
                    <li>Data Modelling and Validation using mongoose</li>
                </ul>
            </div>
            <div className='worklow-wrapper' >
                <h5 className='workflow-header'>Workflow</h5>
                <ul>
                    <li>Git Version Control</li>
                    <li>Agile Development</li>
                    <li>Kanban Methodology</li>
                </ul>
            </div>

            <div className='testing-wrapper' >
                <h5 className='testing-header' >Testing</h5>
                <ul>
                    <li>TDD / BDD Core Principles</li>
                    <li>Client- & Serverside Testing</li>
                    <li>Jest and Enzyme Testing Frameworks</li>
                </ul>
            </div>

        </div>
    );
};

export default Skills;