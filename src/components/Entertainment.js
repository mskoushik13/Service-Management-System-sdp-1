import React,{Component} from 'react';
import { ExternalLink } from 'react-external-link';
import prime from './prime.png';
import net from './net.png';
import aha from './aha.png';
import hotstar from './hotstar.png';
import zee from './zee.png';
import voot from './voot.png';
import sun from './sunnext.png';
const Entertainment=()=> {
  return (
    <div>

        <div>
        <ExternalLink href="https://www.primevideo.com/">
            <span><img src={prime} /></span>
        </ExternalLink>
        <ExternalLink href="https://www.netflix.com/in/">
            <span><img src={net}/></span>
        </ExternalLink>
        </div>
      <div>
        <ExternalLink href="https://www.aha.video/">
            <span><img src={aha}/></span>
        </ExternalLink>
  
        <ExternalLink href="https://www.hotstar.com/in">
            <span><img src={hotstar}/></span>
        </ExternalLink>
      </div>
      <div>
      <ExternalLink href="https://www.zee5.com/">
            <span><img src={zee}/></span>
        </ExternalLink>
        <ExternalLink href="https://www.voot.com/">
            <span ><img src={voot}/></span>
        </ExternalLink>
      </div>
      <div>
      <ExternalLink href="https://www.sunnxt.com/">
            <span ><img src={sun}/></span>
        </ExternalLink>
      </div>
    </div>
 )
  
}
export default Entertainment;