import React from 'react';
import './Resume.css'


const Resume = () => {
    return (
        <div className='resume-container'>

            <div className='resume-item previous-experience'>
                <h6 className='resume-item-title'>N&N Cryptomining UG, <span className='font-weight-bold'>CEO & Founder</span></h6>
                <p className="resume-item-subtitle font-italic">Founded in 2017 the N&N Cryptomining aimed to consult for big cryptomining projects & provide hardware</p>
                <ul className='resume-item-list'>
                    <li className="resume-item-list-item">Trained over 400 Fundraisers in communication, </li>
                    <li className="resume-item-list-item">Responsible for on the job coaching, talks about argumentation & Feedback techniques</li>
                    <li className="resume-item-list-item">Led my campaign to huge success raising over 7 million € for NPOs like Amnesty International,<br />
                        SOS Kinderdörfer and the WWF</li>
                </ul>
            </div>
            <div className='resume-item previous-experience'>
                <h6 className='resume-item-title'>Talk2Move GmbH, <span className='font-weight-bold'>Head of Fundraising Berlin</span></h6>
                <p className="resume-item-subtitle font-italic">Revolutionized Team Captain training through re-design of teaching materials</p>
                <ul className='resume-item-list'>
                    <li className="resume-item-list-item">Trained over 400 Fundraisers in communication, </li>
                    <li className="resume-item-list-item">Responsible for on the job coaching, talks about argumentation & Feedback techniques</li>
                    <li className="resume-item-list-item">Led my campaign to huge success raising over 7 million € for NPOs like Amnesty International,<br />
                        SOS Kinderdörfer and the WWF</li>
                </ul>
            </div>

        </div>
    );
};

export default Resume;