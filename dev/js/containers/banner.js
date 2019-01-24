import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import toggleNav from '../actions/togglenav';

class Banner extends Component {
    constructor(props){
       super(props);
    }

    render(){
       return(
         <div className="banner" style={ { backgroundImage: 'url(dev/public/images/pictures4.jpg)' }} >
           <div className='bannerCover outer'>
             <i className="fas fa-bars" onClick={ () => {
                 this.props.toggleNav('show nav')
             }}></i>
               <ul className={this.props.showNav}>
                 <li>Contacts</li>
                 <li>Publications</li>
                 <li>About</li>
                 <li>Services</li>
                 <i className='fas fa-close' onClick={
                     () => { this.props.toggleNav('hide nav') }
                 }></i>
               </ul>
               <h1>Lanre Abidakun & Co</h1>
               <h3>(chartered accountants)</h3>
               <div className='bannerCover InnerDiv' style={ {backgroundImage: 'url(dev/public/images/companylogo.png)' }}>

               </div>
           </div>
         </div>
       )
    }
}

function mapStateToProps(state){
    return {
        showNav: state.toggleNav.showNav
    }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       toggleNav: toggleNav,
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(Banner);
