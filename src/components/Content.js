import React from 'react';
import './Content.css'

const Content = () => {
    return (
        <div className='introduction row' >

            <div className="hello">
                <span>Hi, my name is Nando Theessen.<br />
                    I am a Full-Stack developer from Berlin, Germany.</span>
                <br />
                <br />
                <span>I specialize in developing applications using the MERN Stack,<br />
                    but am always open to new things. <br /><br />I love working with and learning bleeding edge technologies!
                </span>
                <img src={} alt=""/>
            </div>

            <div className='contact-sm'></div>

            <div className='reach-out'>
                <span>Would like help with a specific project?
                <br />Are you looking for an addition to your team?
                        <br /><br />
                    Please feel free to contact me at any time @
                <br /><span className='font-weight-bold'>nando.theessen@gmail.com</span> or <span className='font-weight-bold'>+49 1520 477 06 47</span></span>
            </div>

        </div>
    );
};

export default Content;