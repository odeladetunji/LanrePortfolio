import React, {Component} from 'react';
import header from './header';
import Footer from './footer';
import Home from './home';

export default () => {
         return(
             <div>
               <header />
               <Home />
               <Footer />
             </div>
         );
}
