import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import '../assets/css/Skills.css'; // Import the CSS file

export default function Skills_v2() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered 
          TabIndicatorProps={{
            style: {
              backgroundColor: '#66fcf1',
            },
          }}
          className="custom-tabs"
        >
          <Tab label="All" />
          <Tab label="Cloud" />
          <Tab label="DevOps" />
          <Tab label="Frameworks" />
          {/* Add more tabs as needed */}
        </Tabs>
        <div className="skills-content">
          {value === 0 && <div className="skills-box">{/* Add your skills content here */}</div>}
          {value === 1 && <div className="skills-box">{/* Add your skills content here */}</div>}
          {value === 2 && <div className="skills-box">{/* Add your skills content here */}</div>}
          {value === 3 && <div className="skills-box">{/* Add your skills content here */}</div>}
        </div>
      </div>
    </section>
  );
}
