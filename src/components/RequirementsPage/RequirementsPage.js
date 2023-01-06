import React from 'react';
import { ReactComponent as Frame } from './Images/Frame.svg';
import './style.css'


export default function RequirementsPage() {

  return (
    <div >
<div className='main'>


      <div className='content'>


      <h1 className='headline'>Why work with Healing?</h1>
    
        <div className='sections'>
          <h2 className='heading'>Reliable Income</h2>
          <p className='paragraph'>Over 10,000 people sign up on BetterHelp every day looking for a counselor to help with lifes challenges. BetterHelp can be your main source of income or a supplement to your current work.</p>
        </div>

        <div className='sections'>
          <h2 className='heading'>Focus on Counseling</h2>
          <p className='paragraph'>No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
        </div>
        
        <div className='sections'>
          <h2 className='heading'>Focus on Counseling</h2>
          <p className='paragraph'>No need to worry about costs from acquiring clients, billing, support or operations. Let us handle the fees and paperwork so you can focus on what you do best!</p>
        </div>
        
        <div className='req'>
       
          <h1 className='requirments'>Requirements</h1>
          <ul>
            <li>
            Licensed by a State Board to provide counseling
            </li>
            <li>
            Experience in counseling for adults, couples, and/or teens
            </li>
            <li>
            Excellent writing skills
            </li>
            <li>
            Reliable Internet connection
            </li>
            <li>
            Currently residing in the US
            </li>
          </ul>
        </div>
<div className='btn'>
  <button type='button'>Get started</button>
</div>
     

      </div>

    <div className='frame'>
<Frame />
</div>

      </div>
    </div>
    
    );
}