import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    iconName: 'sun'
  }, 
  winter: {
    text: "It's chilly",
    iconName: 'snowflake'
  }
}

const getSeason = (lat, month) => {
if (month > 2 && month < 9) {
  return lat > 0 ? 'summer' : 'winter';
} else {
  return lat > 0 ? 'winter' : 'summer';
}
}

const SeasonDisplay = props => {
// constructor (props) {
//   super(props)
  
const season = getSeason(props.lat, new Date().getMonth());

const { text, iconName } = seasonConfig[season]

// const icon = season === 'winter' ? 'snowflake' : 'sun';


// }


  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>
      {text}
      </h1>
      <i className={`icon-right massive ${iconName} icon`} />
     
      
   
    </div>
    );
}



// = (props) => {
//   console.log(props);
//   return (
//   <div>
//     <h3>Season Display</h3>
//   <p>Latitude: {props.lat}</p>
//   </div>
//   );
// };

export default SeasonDisplay;