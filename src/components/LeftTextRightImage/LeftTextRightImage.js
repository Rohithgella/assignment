import React from 'react';
import './LeftTextRightImage.css';
function LeftTextRightImage(props) {
  return (
    <div className="left-text-right-image">
    <div className='left'>
      <div className="heading"><h2>{props.heading}</h2></div>
      <div className="text">{props.text}</div>
      <div className='link'><a href={props.linkUrl}>{props.discription}</a></div>
    </div>
      <div className="image"><img src={props.imageSrc} alt={props.imageAlt} /></div>
    </div>
  );
}
export default LeftTextRightImage;