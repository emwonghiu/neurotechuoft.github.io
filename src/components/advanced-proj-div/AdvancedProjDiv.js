import React from 'react';
import {Helmet} from 'react-helmet';
import './AdvancedProjDiv.scss';

import CurrProjDiv from "../currproj-div/CurrProjDiv";

function AdvancedProjDiv() {
  return(
    <div className="advanced-proj-div">
      <Helmet>
        <title>Projects | NeurotechUofT</title>
      </Helmet>
      
      <CurrProjDiv/>
      <a href="http://bit.ly/admin-team-apps-2019">Apply for a Project Position</a>

      <div className="on-hold-div">
        <h1>On Hold</h1>

        <div className="on-hold-projects">
          <div className="on-hold-proj">
            <a href="https://github.com/neurotechuoft/Biosignals-Board">Biosignals Board</a>
            <p>
              A board that can pick up biosignals (like EEG and ECG), convert
              them to digital values, and stream them to a computer. This will
              be our submission for Part 1 of the NeuroTechX Student Competition.
            </p>
          </div>

          <div className="on-hold-proj">
            <a href="https://github.com/neurotechuoft/Vitreous">VitReous</a>
            <p>
              An eye-based gesture system for virtual and augmented reality devices!
              Using EOG, it allows the user to perform actions such as taking pictures
              and looking through emails without needing to use their hands.
            </p>
          </div>

          <div className="on-hold-proj">
            <a href="https://github.com/neurotechuoft/Mindfulness-Study">Mindfulness Study</a>
            <p>
              A research project looking into and designing a product for feedback-based meditation.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AdvancedProjDiv;
