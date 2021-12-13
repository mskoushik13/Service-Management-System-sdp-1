import React,{Component} from 'react';
import { ExternalLink } from 'react-external-link';
import sbi from './sbi.png';
import canara from './canara.png';
import icic from './icic.png';
import union from './union.png';
import hdfc from './hdfc.png';
import kotak from './kotak.png';
const banking=()=> {
  return (
    <div>

    <div>
        <ExternalLink href="https://www.onlinesbi.com/">
            <span><img src={sbi}/></span>
        </ExternalLink>
        <ExternalLink href="https://canarabank.com/">
            <span><img src={canara}/></span>
        </ExternalLink>

    </div>
   <div>
   <ExternalLink href="https://www.icicibank.com/z">
            <span><img src={icic}/></span>
        </ExternalLink> 
        <ExternalLink href="https://www.unionbankonline.co.in/">
            <span><img src={union}/></span>
        </ExternalLink> 
   </div>
   <div>
        
        <ExternalLink href="https://www.hdfcbank.com/">
            <span><img src={hdfc}/></span>
        </ExternalLink> 
        <ExternalLink href="https://www.kotak.com/en/home.html">
            <span><img src={kotak}/></span>
        </ExternalLink> 
   </div>

    </div>
 )
  
}
export default banking;