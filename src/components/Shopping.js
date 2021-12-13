import React,{Component} from 'react';
import { render } from 'react-dom';
import { ExternalLink } from 'react-external-link';
import Flip from './flip.png';
import Ama from './Ama.png';
import snapd from'./snapdeal.png';
import myntra from './myntra.png';
import big from './big.png';
import pay from './pay.png';
import ajio from './ajio.png';
const Shopping=()=> {
  return (
    <div>
       <div>
          <ExternalLink href="https://www.amazon.com/">
      <span > <img width="400px" height="250px" src={Ama}/></span>
    </ExternalLink>
        <ExternalLink href="https://www.flipkart.com/">
            <span><img width="400px" height="250px"src={Flip}/></span>
        </ExternalLink>
    </div>
      <div>
      <ExternalLink href="https://www.snapdeal.com/">
            <span><img width="400px" height="250px"src={snapd}/></span>
        </ExternalLink>
        <ExternalLink href="https://www.myntra.com/">
            <span><img width="400px" height="250px"src={myntra}/></span>
        </ExternalLink>
      </div>
      <div>
      <ExternalLink href="https://www.bigbasket.com/">
            <span><img width="400px" height="250px"src={big}/></span>
        </ExternalLink>
        <ExternalLink href="https://paytmmall.com/">
            <span><img width="400px" height="250px" src={pay}/></span>
        </ExternalLink>
      </div>
      <ExternalLink href="https://www.ajio.com/">
            <span><img width="400px" height="250px" src={ajio}/></span>
        </ExternalLink>
    </div>
 )
  
}
export default Shopping;