import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
import {Grid} from '@material-ui/core';

function Home() {
    return (
      <div className="home">
         <Grid container columns={16} > 
         <Grid item xs={16} md={8} sm={6} lg={4} >
    <paper >
        <div className="centerhead1">
        
        <div className="home2">
        <FontAwesomeIcon className="play" size="2x" icon={ faPlay}/></div>
        <div className="home2"><h1 className="head">VideoSummarize</h1></div>
        </div></paper></Grid>
      <div className="centerhead">
        <div className="centerhead2"><FontAwesomeIcon className="play2" size="4x" icon={ faPlay}/></div>
      <div className="centerhead3">  <h1 className="head2">VideoSummarize</h1></div>
    

      </div>
      <div className="para"><p>Summarize your video and save time</p></div>
      <div className="buttondiv">
        <button className="button">upload video</button>
        <button className="button1">upload video</button>
      </div>
      </Grid>
      </div>
    );
  }
  
  export default Home;