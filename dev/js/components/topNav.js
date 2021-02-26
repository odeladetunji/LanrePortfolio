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
          <div className="welcomeheader">
              <div className="faq">
                  <p>FAQs</p>
              </div>
              <div className="closeMaximixOrMinimixButton">
                   <i className=""></i>
                   <i className=""></i>
                   <i className=""></i>
              </div>
          </div>
      </div>
   )
 }
}

export default bander;

