import React from 'react';
import Navbar from './components/Navbar';
import{BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './components/category';
import Shopping from './components/Shopping';
import SocialMedia from './components/SocialMedia';
import Learning from './components/Learning';
import Traveling from './components/Traveling';
import Entertainment from './components/Entertainment';
import banking from './banking';
import SignUp from './components/SignUp';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/category" exact component={Category}/>
        <Route path="/shopping" exact component={Shopping}/>
        <Route path="/SocialMedia" exact component={SocialMedia}/>
        <Route path="/Learning" exact component={Learning}/>
        <Route path="/Traveling" exact component ={Traveling}/>
        <Route path="/Entertainment" exact component={Entertainment}/>
        <Route path="/banking" exact component={banking}/>
        <Route path ="/sign-up" component={SignUp}/>
       
      </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App;