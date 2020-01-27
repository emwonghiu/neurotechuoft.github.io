import React from 'react';
import './OpportunitiesDiv.scss';

import {Link} from 'react-router-dom';

function OpportunitiesDiv() {
  return(
    <div className="opportunities-div">
      <h1>Opportunities</h1>
      <div className="positions">
        <h3>Outreach Associate</h3>
        <h3>Workshops Director</h3>
        <h3>Neuroscience Mentor</h3>
        <h3>Machine Learning Mentor</h3>
        <h3>Sponsorship Associate</h3>
        <h3>Talent Director</h3>
        <h3 className="last-position">Analog Electronics Mentor</h3>
      </div>
      <Link to="/opportunities">Apply for a position</Link>
    </div>
  )
}

export default OpportunitiesDiv;
