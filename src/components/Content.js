import React from 'react';
import './Content.css'

const Content = () => {
    return (
        <div className='introduction row' >
            <div className='col-2'></div>
            <div className="col-8 hello">
                <span>Hi, my name is Nando Theessen.<br />
                    I am a Full-Stack developer from Germany.</span>
                <br />
                <br />
                <span>I specialize in applications that cover the whole stack </span>
            </div>
            <div className='col-2'></div>
            <div className='contact-sm'></div>
        </div>
    );
};

export default Content;