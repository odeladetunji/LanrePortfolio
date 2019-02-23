import React, {Component} from 'react';
// import React, {Component} from 'react';
import Services from './services';
import Banner from '../containers/banner';
import About from './about';
import Contact from './contact';
import Carousel from './carousel';
import MobileNav from '../containers/mobileHeader';

export default () => {
       return(
           <div>
               <Banner />
               <About />
               <MobileNav />
           </div>
       );
}
