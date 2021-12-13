import React,{Component} from 'react';
import { render } from 'react-dom';
import { ExternalLink } from 'react-external-link';
import insta from './insta.png';
import face from './face.png';
import twi from './twi.png';
import snap from './snap.png';
import link from './link.png';
import what from './whatsapp.png';
const SocialMedia=()=> {
  return (
    <div>

    <div>
        
        <ExternalLink href="https://www.facebook.com/">
            <span><img width="400px" height="250px"src={face}/></span>
        </ExternalLink>
        <ExternalLink href="https://www.instagram.com/">
            <span><img width="400px" height="250px" src={insta}/></span>
        </ExternalLink>
    </div>
     <div>
     <ExternalLink href="https://twitter.com/">
            <span><img width="400px" height="250px"src={twi}/></span>
        </ExternalLink>
        <ExternalLink href="https://www.snapchat.com/">
            <span><img width="400px" height="250px" src={snap}/></span>
        </ExternalLink>

     </div>
     <div>
     <ExternalLink href="https://in.linkedin.com/">
     <span><img  width="400px" height="250px"src={link}/></span>
 </ExternalLink>
 <ExternalLink href="https://web.whatsapp.com/">
     <span><img width="400px" height="250px" src={what}/></span>
 </ExternalLink>

     </div>

    </div>
 )
  
}
export default SocialMedia;