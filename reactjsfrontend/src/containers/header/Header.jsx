import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
    return (
        <div className='ajiporto__header section__padding' id='home'>
            <div className='ajiporto__header-content'>
                <h1 className='gradient__text'>
                    Furqon Aji Yudhistira
                </h1>
                <p>
                    3+ years of experience designing and executing technology solution architect and digital transformation 
                    with efficiency increment output by 70%. Possess strong leadership skills and am highly successful as a 
                    project lead to improve the organization's effectiveness. Experienced as an IT Consultant to bring a 
                    solution through the data-driven system and analysis.
                </p>
                
                <div className='ajiporto__header-content__input'>
                    <input type='email' placeholder='Your Email Address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className='ajiporto__header-content__people'>
                    <img src={people}></img>
                    <p>1.5M people viewed your profile</p>
                </div>
            </div>
            <div className='ajiporto__header-image'>
                <img src={ai} alr='ai' />
            </div>
        </div>
    )
}

export default Header
