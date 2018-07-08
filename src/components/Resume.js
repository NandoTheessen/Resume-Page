import React from 'react';
import './Resume.css'


const Resume = () => {
    return (
        <div className='resume-container'>

            <div className='resume-item previous-experience'>
                <h6 className='resume-item-title'>N&N Cryptomining UG, <span className='font-weight-bold'>CEO & Founder</span></h6>
                <p className="resume-item-subtitle font-italic">The N&N Cryptomining aimed to consult for big cryptomining projects & provide hardware</p>
                <ul className='resume-item-list'>
                    <li className="resume-item-list-item">Helped build a project of 800.000$ in Bosnia, providing know-how & support</li>
                    <li className="resume-item-list-item">Shipped custom built & configured mining hardware to customers</li>
                </ul>
            </div>
            <div className='resume-item previous-experience'>
                <h6 className='resume-item-title'>Talk2Move GmbH, <span className='font-weight-bold'>Head of Fundraising Berlin</span></h6>
                <p className="resume-item-subtitle font-italic">Revolutionized Team Captain training through re-design of teaching materials</p>
                <ul className='resume-item-list'>
                    <li className="resume-item-list-item">Trained over 400 Fundraisers in communication, sales & teamwork</li>
                    <li className="resume-item-list-item">Responsible for on the job coaching, talks about argumentation & Feedback techniques</li>
                    <li className="resume-item-list-item">Led my campaign to huge success raising over 7 million € for NPOs like Amnesty International,<br />
                        SOS Kinderdörfer and the WWF</li>
                </ul>
            </div>
        </div>
    );
};

export default Resume;