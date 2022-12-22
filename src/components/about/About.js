import React from 'react';
import AboutHeader from './AboutHeader';
import AboutBody from './AboutBody';
import './style.css';

export default function About() {
  return (
    <div data-testid="about-page">
      <AboutHeader />
      <AboutBody />
    </div>
  );
}
