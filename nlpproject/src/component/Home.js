import React from "react";
import {useRef} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlay} from "@fortawesome/free-solid-svg-icons";
// import {Grid} from '@material-ui/core';

function Home() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of other element
    inputRef.current.click();
  }
  const handleFileChange = event => {
    const fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }

    console.log('fileObj is', fileObj);

    // 👇️ reset file input
    event.target.value = null;

    // 👇️ is now empty
    console.log(event.target.files);

    // 👇️ can still access file object here
    console.log(fileObj);
    console.log(fileObj.name);
  };
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
      <div className="buttondiv">
      <input
        style={{display: 'none'}}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
        {/* <button className="button">upload video</button> */}
        <button className="button1" onClick={handleClick}>upload video</button>
      </div>
   
      </div>
    );
  }
  
  export default Home;