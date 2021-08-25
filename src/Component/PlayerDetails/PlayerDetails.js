import React from 'react';
import './PlayerDetails.css'
const PlayerDetails = (props) => {
   const {img,name,salary} = props.pd;
    return (
        <div className="player text-center">
            <img src={img} alt=""/>
            <h6 >Name : {name}</h6>
            <h6 >Salary : {salary}$</h6>
        </div>
    );
};

export default PlayerDetails;