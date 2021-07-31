import './App.scss';
import icon from './assets/fonts/style.scss'
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import React, {useEffect} from 'react'
import {Route, Switch, useLocation, Redirect} from "react-router-dom";
import Skills from "./Contents/Skills/Skills";
import About from "./Contents/About/About";
import Home from "./Contents/Home/Home";
import Portfolio from "./Contents/Portfolio/Portfolio";
import Contacts from "./Contents/Contacts/Contacts";
import PortfolioInfo from "./Contents/Portfolio/PortfolioInfo/PortfolioInfo";
import {AnimatePresence} from "framer-motion";
import {projectInfo} from './common/data/projectsData'
import {useActions} from "./Hooks/useActions";
import {useSelector} from "react-redux";
import Loader from "./common/components/Loader/Loader";


const App = () => {
    const location = useLocation()
    const data = projectInfo.find(d => d.endpoint === location.pathname)
    const isLoading = useSelector(state => state.loading.isLoading)
    const {loading} = useActions()

    useEffect(() => {
        let id = setTimeout(() => {
            loading(false)
        }, 3000)
        return () => {
            clearInterval(id)
        }
    },[])

    // check if one of the values is correct Show header component
    const show = location.pathname === '/Skills' || location.pathname  === '/Home'

    return (
        <div className="container">
            {isLoading ? <Loader/> : <>
                <Nav/>
                {show && <Header/>}
                <div className="content__wrapper">
                    <AnimatePresence>
                        <Switch location={location} key={location.key}>
                            <Route path={["/","/cv"]} exact render={() => <Redirect to='/Home'/>}/>
                            <Route path='/Home' render={() => <Home/>}/>
                            <Route path='/Skills' render={() => <Skills/>}/>
                            <Route path='/About' render={() => <About/>}/>
                            <Route path='/Portfolio' render={() => <Portfolio/>}/>
                            <Route path='/Contacts' render={() => <Contacts/>}/>
                            <Route path='/PortfolioInfo' render={() => <PortfolioInfo data={data}/>}/>
                        </Switch>
                    </AnimatePresence>
                </div>
            </>}
        </div>
    );
}

export default App;
