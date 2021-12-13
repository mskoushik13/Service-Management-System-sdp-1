import React,{Component} from 'react';
import { ExternalLink } from 'react-external-link';
import bu from './by.png';
import co from './cous.png';
import white from './whitehat.png';
import un from './una.png';
import linkin from './linkin.png';
import cisco from './cisco.png';
const Learning=()=> {
  return (
    <div>
     <div>
        <ExternalLink href="https://byjus.com/">
            <span><img  width="400px" height="250px"src={bu}/></span>
        </ExternalLink>
        <ExternalLink href="https://learningnetwork.cisco.com/s/">
            <span><img  width="400px" height="250px"src={cisco}/></span>
        </ExternalLink>
       
    </div>
    <div>
    <ExternalLink href="https://www.whitehatjr.com/">
            <span><img width="400px" height="250px" src={white}/></span>
        </ExternalLink>
        <ExternalLink href="https://unacademy.com/">
            <span><img  width="400px" height="250px"src={un}/></span>
        </ExternalLink>
    </div>
    <div>
    <ExternalLink href="https://learning.linkedin.com/">
            <span><img width="400px" height="250px" src={linkin}/></span>
        </ExternalLink>
        <ExternalLink href="https://www.coursera.org/">
            <span><img  width="400px" height="250px"src={co}/></span>
        </ExternalLink>
    </div>
  
    </div>
 )
  
}
export default Learning;