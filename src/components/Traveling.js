import React,{Component} from 'react';
import { ExternalLink } from 'react-external-link';
import redbus from './redbus.png';
import rtc from './rtc.png';
import abhi from './abhi.png';
import make from './make.png';
import rail from './rail.png';
import go from './go.png';
import ya from './ya.png';
import ola from './ola.png';
import uber from './uber.png';
const Traveling=()=> {
  return (
    <div>
    <div>
    <ExternalLink href="https://www.apsrtconline.in/oprs-web/">
           
                <span><img   width="400px" height="250px"src={rtc}/> </span>
        </ExternalLink>
     <ExternalLink href="https://redbus.com/">
            <span><img   width="400px" height="250px"src={redbus}/></span>
        </ExternalLink> 
    </div>
    <div>
    <ExternalLink href="https://www.abhibus.com/">
            <span><img  width="400px" height="250px" src={abhi}/></span>
        </ExternalLink> 
        <ExternalLink href="https://www.makemytrip.com/">
            <span><img   width="400px" height="250px"src={make}/></span>
        </ExternalLink>  
    </div>
    <div>
    <ExternalLink href="https://www.irctc.co.in/nget/train-search">
            <span><img   width="400px" height="250px"src={rail}/></span>
        </ExternalLink>  
        <ExternalLink href="https://www.goibibo.com/">
            <span><img   width="400px" height="250px"src={go}/></span>
        </ExternalLink>  
    </div>
    <ExternalLink href="https://www.yatra.com/domestic-flights/">
            <span><img  width="400px" height="250px" src={ya}/></span>
        </ExternalLink>  
        <div>
        <ExternalLink href="https://www.olacabs.com/">
            <span><img   width="400px" height="250px"src={ola}/></span>
        </ExternalLink> 
        <ExternalLink href="https://www.uber.com/in/en/">
            <span><img   width="400px" height="250px"src={uber}/></span>
        </ExternalLink> 
        </div>
    </div>
 )
}
export default Traveling