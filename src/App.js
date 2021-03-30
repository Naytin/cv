import './App.scss';
import icon from './assets/fonts/style.scss'
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import React from 'react'
import {Route, Switch, useLocation} from "react-router-dom";
import Skills from "./Contents/Skills/Skills";
import About from "./Contents/About/About";
import Home from "./Contents/Home/Home";
import Portfolio from "./Contents/Portfolio/Portfolio";
import Contacts from "./Contents/Contacts/Contacts";
import PortfolioInfo from "./Contents/Portfolio/PortfolioInfo/PortfolioInfo";
import {AnimatePresence} from "framer-motion";


const App = () => {
    const [isShow, setIsShow] = React.useState(true)
    const location = useLocation()
    console.log(location)

    return (
        <div className="container">
            <Nav/>
            {isShow && <Header/>}
            <div className="content__wrapper">
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route path='/Home' render={() => <Home/>}/>
                        <Route path='/Skills' render={() => <Skills/>}/>
                        <Route path='/About' render={() => <About/>}/>
                        <Route path='/Portfolio' render={() => <Portfolio switchShow={setIsShow}/>}/>
                        <Route path='/Contacts' render={() => <Contacts/>}/>
                        <Route path='/PortfolioInfo' render={() => <PortfolioInfo/>}/>
                    </Switch>
                </AnimatePresence>
                {/*<div>*/}
                {/*    <button onClick={(e) => console.log(e)}>Left</button>*/}
                {/*    <button onClick={(e) => console.log(e)}>Right</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
