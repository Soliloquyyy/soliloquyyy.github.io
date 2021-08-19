import React, { useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import TopBar from './topBar/topBar.js'

//import react router
import { Switch, Route, useLocation, BrowserRouter} from 'react-router-dom';

//import pages
import {
    Home,
    Photography,
    Computer,
    About
} from './Pages'

//import subpages
import{
    rgbSub,
    thoSub,
    actorSub,
    boardSub,
    dNcSub,
    kdSub,
    lifeSub,
    raySub,
    shaderSub
} from './SubPages'

//import reactspring
import { animated, useTransition } from 'react-spring';



function App() {

    //const { location } = useContext(__RouterContext);
    const location = useLocation();
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 0, transform: "translate(100%, 0%)" },
        enter: { opacity: 1, transform: "translate(0%, 0%)" },
        leave: { opacity: 0, transform: "translate(-50%, 0%)" }
    });
    


    return (
        <>
                <TopBar/>
                <main className="container-fluid">
                    {transitions.map(({ item,props,key }) => (
                      <animated.div key={key} style={props} className="position-relative">

                          <Switch location={item}>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/computer" component={Computer}/>
                            <Route exact path="/photography" component={Photography}/>
                            <Route exact path = "/about" component={About}/>
                            <Route exact path="/computer/1" component={rgbSub}/>
                            <Route exact path="/computer/2" component={raySub}/>
                            <Route exact path="/computer/3" component={shaderSub}/>
                            <Route exact path="/computer/4" component={thoSub}/>
                            <Route exact path="/computer/5" component={boardSub}/>
                            <Route exact path="/computer/6" component={kdSub}/>
                            <Route exact path="/computer/7" component={lifeSub}/>
                            <Route exact path="/computer/8" component={actorSub}/>
                            <Route exact path="/computer/9" component={dNcSub}/>
                          </Switch>
                      </animated.div>  
                    ))}
                </main>	
    	</>
    );
};



export default App;