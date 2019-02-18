import React, {Component} from 'react';
// import React, {Component} from 'react';
import Services from './services';
import Banner from '../containers/banner';
import About from './about';
import Contact from './contact';
import Carousel from './carousel';

export default () => {
       return(
           <div>
               <Banner />
               <About />
               <Services />
           </div>
       );
}
