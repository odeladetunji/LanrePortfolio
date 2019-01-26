import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Col, Row, Grid} from 'react-bootstrap';
import toggleNav from '../actions/togglenav';
import scroll from '../actions/scroll';

class Banner extends Component {
    constructor(props){
       super(props);
    }

    scroll_into_view (param) {
        console.log(param)
        param.scrollIntoView({block: 'end', behavior: 'smooth'});
    }

    render(){
       return(
         <div className="banner" style={ { backgroundImage: 'url(dev/public/images/pictures4.jpg)' }} >
           <div className='bannerCover outer'>
             <i className={"fas fa-bars" + ' ' + this.props.showBar} onClick={ () => {
                 this.props.toggleNav('show nav')
             }}></i>
               <ul className={this.props.showNav}>
                 <li onClick={ () => {this.props.scroll('scroll to services')}}>Services</li>
                 <li>Publications</li>
                 <li onClick={ () => {this.props.scroll('scroll to about')}}>About</li>
                 <li onClick={ () => {this.props.scroll('scroll to contacts')}}>Contacts</li>
                 <i className='fas fa-window-close' onClick={
                     () => { this.props.toggleNav('hide nav') }
                 }></i>
               </ul>
               <h1>Lanre Abidakun & Co</h1>
               <h3>(chartered accountants)</h3>
               <div id={this.props.showBar} className='bannerCover InnerDiv' style={ {backgroundImage: 'url(dev/public/images/companylogo.png)' }}>

               </div>
           </div>
         </div>
       )
    }
}

function mapStateToProps(state){
    return {
        showNav: state.toggleNav.showNav,
        showBar: state.toggleNav.showBar
    }
}

function matchDispatchToState(dispatch){
    return bindActionCreators({
       toggleNav: toggleNav,
       scroll: scroll
    }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToState)(Banner);
