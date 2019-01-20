// import React, {Component} from 'react';
import React, {Component} from 'react';
import Services from './services';
import Banner from './banner';
// import {bindActionCreators} from 'redux';
// import {connect} from 'react-redux';

// class Home extends Component {
//      Constructor(props){
//          super(props);
//      }
//
// }

export default () => {
       return(
           <div>
               <Banner />
               <Services />
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
