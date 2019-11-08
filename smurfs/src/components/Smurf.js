import React from 'react';
import SmurfPic from './SmurfPic.png';

const Smurf = props => {
  return (
    <div className='smurf'>
      <h3>{props.smurf.name}</h3>
      <p>Age: {props.smurf.age}</p>
      <p>Height: {props.smurf.height}</p>
      <img src={SmurfPic} />
    </div>
  );
};

export default Smurf;
