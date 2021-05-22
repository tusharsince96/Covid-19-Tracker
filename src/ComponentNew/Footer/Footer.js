import React, { Component } from 'react';
import { Button } from '../Button';
import './Footer.css'
class Footer extends Component{
   


     render(){
         return(
             
            <nav className="FooterItems">

             
              <div className="row">
              <p className="col-sm">
              &copy;{new Date().getFullYear()} | tusharsince96@outlook.com | School Of Computer And System Sciences | Jawaharlal Nehru University
              </p>
              </div>
             </nav>
              
             
            
         )
     }
}
export default Footer;