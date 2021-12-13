import React from 'react';
import { Link } from 'react-router-dom';
import shop from './shop.png';
import social from './social.png';
import learn from './learn.png';
import travel from './travel.png';
import ent from './ent.png';
import bank from './bank.png';
const category=() =>
{
    
    return (
        <div>        
               <Link to="/Shopping"> <img width="400px"  height="250px" src={shop} /> </Link>
               
               <Link to ="/SocialMedia"><img  height="250px" width ="400px"src={social}/></Link>
            <div>
            <Link to ="/Learning"><img width="400px" height="250px" src={learn}/></Link>
            <Link to ="/traveling"><img width="400px" height="250px"src={travel}/></Link>
            </div>           
            <Link to ="/Entertainment"><img  width="400px" height="250px"src={ent}/></Link>
            <Link to ="/banking"><img width="400px" height="250px" src={bank}/></Link>
        </div>
    )
}

export default category;