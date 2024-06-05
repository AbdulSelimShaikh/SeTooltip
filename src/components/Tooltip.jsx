/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './styles/Tooltip.css';
// creat span or button 
function Tooltip() {  
  return (
  
    <div>
  
  <a className="tooltips" href="#">
  <button type="button" className="btn btn-primary btn-lg">TopButton</button>
      <span>TopButton</span></a>

      <a className="tooltips" href="#"><button type="button" className="btn btn-danger btn-lg">RightButton</button>
      <span>RightButton</span></a>

      <a className="tooltips" href="#"><button type="button" className="btn btn-warning btn-lg">LeftButton</button>
      <span>LeftButton</span></a>

      <a className="tooltips" href="#"><button type="button" className="btn btn-success btn-lg">DownButton</button>
      <span>DownButton</span></a>

      
      <a className="tooltips" href="#"><button type="button" className="btn btn-info btn-lg">EndButton</button>
      <span>EndButton</span></a>
  
  </div>
  
      
  
  )
}
//creat span or button 

export default Tooltip;
