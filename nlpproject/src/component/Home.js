import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";

function Home() {
    return (
      <div className="home">
        <div className="centerhead1">
        <div className="home2">
        <FontAwesomeIcon className="play" size="2x" icon={ faPlay}/></div>
        <div className="home2"><h1 className="head">VideoSummarize</h1></div>
        </div>
      <div className="centerhead">
        <div className="centerhead2"><FontAwesomeIcon className="play2" size="4x" icon={ faPlay}/></div>
      <div className="centerhead3">  <h1 className="head2">VideoSummarize</h1></div>
    

      </div>
      <div className="para"><p>Summarize your video and save time</p></div>
      
      </div>
    );
  }
  
  export default Home;