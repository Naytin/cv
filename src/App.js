import './App.scss';
import icon from './assets/fonts/style.scss'
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import React from 'react'
import {Route, Switch, useLocation, Redirect} from "react-router-dom";
import Skills from "./Contents/Skills/Skills";
import About from "./Contents/About/About";
import Home from "./Contents/Home/Home";
import Portfolio from "./Contents/Portfolio/Portfolio";
import Contacts from "./Contents/Contacts/Contacts";
import PortfolioInfo from "./Contents/Portfolio/PortfolioInfo/PortfolioInfo";
import {AnimatePresence} from "framer-motion";
import {projectInfo} from './common/data/data'
import Loading from './common/Loading/Loading'


const App = () => {
    const [isShow, setIsShow] = React.useState(true)
    const location = useLocation()
    const data = projectInfo.find(d => d.endpoint === location.pathname)

    const showHeader = React.useCallback(() => {
        setIsShow(state => !state)
    },[])

    return (
        <div className="container">
            <Nav/>
            {isShow && <Header/>}
            {/*<Loading/>*/}
            <div className="content__wrapper">
                <AnimatePresence>
                    <Switch location={location} key={location.key}>
                        <Route path={"/"} exact render={() => <Redirect to='/Home'/>}/>
                        <Route path={"/cv"} exact render={() => <Redirect to='/Home'/>}/>
                        <Route path='/Home' render={() => <Home/>}/>
                        <Route path='/Skills' render={() => <Skills/>}/>
                        <Route path='/About' render={() => <About showHeader={showHeader}/>}/>
                        <Route path='/Portfolio' render={() => <Portfolio showHeader={showHeader}/>}/>
                        <Route path='/Contacts' render={() => <Contacts/>}/>
                        <Route path='/PortfolioInfo' render={() => <PortfolioInfo showHeader={showHeader} data={data}/>}/>
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
