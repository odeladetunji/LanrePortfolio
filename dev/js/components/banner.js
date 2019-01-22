import React, {Component} from 'react';

export default () => {
    return(
       <div className="banner">
         <ul className='carousel'>
           <li id='first' style={ {backgroundImage: 'url(dev/public/images/picture1.jpg)' }}></li>
           <li id='second'></li>
           <li id='third'></li>
           <li id='fouth'></li>
           <li id='fifth'></li>
           <li id='sixth'></li>
           <li id='seventh'></li>
           <li id='eight'></li>
         </ul>
         <div className='bannerCover'>
             <ul>
               <li>Contacts</li>
               <li>Publications</li>
               <li>About</li>
               <li>Services</li>
             </ul>
             <h1>Lanre Abidakun & Co</h1>
             <h3>(chartered accountants)</h3>
             <div className='bannerCover InnerDiv' style={ {backgroundImage: 'url(dev/public/images/companylogo.png)' }}>

             </div>
         </div>
       </div>
    )
}
