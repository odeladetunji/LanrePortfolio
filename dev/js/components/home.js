import React, {Component} from 'react';
// import React, {Component} from 'react';
import Services from './services';
import Banner from '../containers/banner';
import About from './about';
import Contact from './contact';
import Carousel from './carousel';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// class Home extends Component {
//      Constructor(props){
//          super(props);
//      }
// }



export default () => {
       return(
           <div>
               <Banner />
               <About />
               <Services />
               <Contact />
           </div>
       );
}

// const mapStateToProps = (state) => {
//   return {
//
//   }
// }
//
// const matchDispatchToState = (dispatch) {
//   return bindActionCreators({
//
//   }, dispatch);
// }

// export default Home;
