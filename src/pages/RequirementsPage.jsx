import React from 'react';
import { data } from '../staticData/requirementsPage';
import { ReactComponent as Frame } from '../images/Frame.svg';
import '../styles/RequirementPage.css';

export default function RequirementsPage() {
  return (
    <div className="max-w-7xl mx-auto main font-poppins py-16">
      <div className="flex flex-col lg:flex-row space-x-10">
        <div className="content">
          <h1 className="headline uppercase">Why work with Healing?</h1>

          <div className="sections">
            <h2 className="heading uppercase">Reliable Income</h2>
            <p className="text-lg">{data.reliableIncome}</p>
          </div>

          <div className="sections">
            <h2 className="heading uppercase">Focus on Counseling</h2>
            <p className="text-lg">{data.focusonCounseling}</p>
          </div>

          <div className="sections">
            <h2 className="heading uppercase">Focus on Counseling</h2>
            <p className="text-lg">{data.focusonCounseling}</p>
          </div>

          <div className="req mb-8">
            <h1 className="requirments uppercase">Requirements</h1>
            <ul className="pl-5">
              <li>Licensed by a State Board to provide counseling</li>
              <li>
                Experience in counseling for adults, couples, and/or teens
              </li>
              <li>Excellent writing skills</li>
              <li>Reliable Internet connection</li>
              <li>Currently residing in the US</li>
            </ul>
          </div>
          <div>
            <button type="button" className="blue_button">
              Get started
            </button>
          </div>
        </div>

        <div className="frame self-center lg:self-start">
          <Frame />
        </div>
      </div>
    </div>
  );
}
