import React, { Component } from 'react';
import AppNavbar from './AppNavbar'

class Home extends Component {
    state = {  }
    render() { 
        return (
        <div>
           <AppNavbar/>
           <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50px'}}>Welcome to the best promoter of your distress!</h2><br/>
           <div style={{textAlign: 'center', fontSize: '20px', color: 'darkgreen'}}>
               <span style={{height: '50px'}}>Just see what a junk you've waisted own money for away...</span>               
            </div>
        </div>
        );
    }
}
 
export default Home;