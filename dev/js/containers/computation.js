import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class bander extends Component {
constructor(props, context) {
   super(props, context);

   this.handleSelect = this.handleSelect.bind(this);

   this.state = {
     index: 0,
     direction: null,
     interval: 1000,
     pauseOnHover: false
   };
 }

 handleSelect(selectedIndex, e) {
   alert(`selected=${selectedIndex}, direction=${e.direction}`);
   this.setState({
     index: selectedIndex,
     direction: e.direction
   });
 }

 render(){
   return(
      <div>
          <div className="mainBody">
              <h3>Image Input</h3>
              <p>Name of File</p>
             <div className="scanImageDiv"></div>
          </div>
          <div className="scanImageDiv">
              <p>HeatMap</p>
             <div className="scanImageDiv"></div>
          </div>
          <div className="scanImageDiv">
             <div className='rangeHeading'>
                 <h3>Charts of Predictions in the range of 0 to 1</h3>
             </div>
             <div className="rangeItSelf">
                 <div className="typeOfRange">
                     <p>Normal</p>
                     <p>Benign</p>
                     <p>Invasive</p>
                     <p>InSitu</p>
                 </div>
                 <div className="rangeDrawers">

                 </div>
             </div>
          </div>
      </div>
   )
 }
}

export default bander;

