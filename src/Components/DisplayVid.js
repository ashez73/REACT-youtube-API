import React from 'react';
import './DisplayVid.css';
const DisplayVid = (props) => {
  return (
     <React.Fragment>
       {props.video &&
       <div className = 'displayVid'>
       <iframe title='ut' src= {`https://www.youtube.com/embed/${props.video.id.videoId}`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>ooo</iframe>
       <h3>{props.video.snippet.title}</h3>
       <p>{props.video.snippet.description}</p>
       </div>
       }
     </React.Fragment>
   );
 };
export default DisplayVid;