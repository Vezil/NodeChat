import React from 'react';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import { Link } from 'react-router-dom';

import './InfoBar.css';


const InfoBar = ( { room } ) => (
    
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={ onlineIcon } alt="online img"/>
            <h3><span className="room">Room :</span> { room.toProperCase() }</h3>
        </div>
        <div className="rightInnerContainer">
            {/* <a href="/"><img src={ closeIcon } alt="close img"/></a> */}
            <Link to="/"><img src={ closeIcon } alt="close img"/></Link>
        </div>
    </div>

)

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}; 

export default InfoBar;