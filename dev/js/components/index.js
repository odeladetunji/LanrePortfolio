import React, {Component} from 'react';
import {Col, Row, Grid, xs, sm, md} from 'react-bootstrap';
import Footer from './footer';
import Home from './home';


class App extends Component {

      render(){
        return(
            <div>
              <Home />
              <Footer />
            </div>
        );
      }
}

export default App;
