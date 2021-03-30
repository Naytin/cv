import './App.scss';
import icon from './assets/fonts/style.scss'
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import React from 'react'
import {BrowserRouter, Route, Switch, useLocation} from "react-router-dom";
import {useTransition, animated} from 'react-spring'
import Skills from "./Contents/Skills/Skills";
import About from "./Contents/About/About";
import Home from "./Contents/Home/Home";
import Portfolio from "./Contents/Portfolio/Portfolio";
import Contacts from "./Contents/Contacts/Contacts";
import PortfolioInfo from "./Contents/Portfolio/PortfolioInfo/PortfolioInfo";


// export default function App2() {
//     const [index, set] = useState(0)
//
//     const onClick = useCallback(() => set(state => (state + 1) % 3), [])
//     const transitions = useTransition(index, p => p, {
//         from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
//         enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
//         leave: {opacity: 0, transform: 'translate3d(-50%,0,0)'},
//     })
//     return (
//         <div className="simple-trans-main" onClick={onClick}>
//             {transitions.map(({item, props, key}) => {
//                 const Page = pages[item]
//                 return <Page key={key} style={props}/>
//             })}
//         </div>
//     )
// }


// const App = () => {
//     const location = useLocation()
//     const transitions = useTransition(location, location => location.pathname, {
//         from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//         enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//         leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//     })
//
//     return (
//         <div className="container">
//             {/*<BrowserRouter>*/}
//                 <Nav/>
//                 <Header/>
//                 <div className="content__wrapper">
//                     {transitions.map(({item: location, props, key}) => (
//                         <animated.div key={key} style={props}>
//                         <Switch location={location}>
//                             <Route exact path={['/Home', '/']} render={() => <Home/>}/>
//                             <Route path='/Skills' render={() => <Skills/>}/>
//                             <Route path='/About' render={() => <About/>}/>
//                             <Route path='/Portfolio' render={() => <Portfolio/>}/>
//                             <Route path='/Contacts' render={() => <Contacts/>}/>
//                             <Route path='/PortfolioInfo' render={() => <PortfolioInfo/>}/>
//                             {/*<div>*/}
//                             {/*    <button onClick={(e) => console.log(e)}>Left</button>*/}
//                             {/*    <button onClick={(e) => console.log(e)}>Right</button>*/}
//                             {/*</div>*/}
//                         </Switch>
//                     </animated.div>
//                        ))}
//                 </div>
//             {/*</BrowserRouter>*/}
//         </div>
//     );
// }

const App = () => {
    const location = useLocation()
    console.log(location)
    return (
        <div className="container">
            <Nav/>
            <Header/>
            <div className="content__wrapper">
                <Route exact path={['/Home', '/']} render={() => <Home/>}/>
                <Route path='/Skills' render={() => <Skills/>}/>
                <Route path='/About' render={() => <About/>}/>
                <Route path='/Portfolio' render={() => <Portfolio/>}/>
                <Route path='/Contacts' render={() => <Contacts/>}/>
                <Route path='/PortfolioInfo' render={() => <PortfolioInfo/>}/>
                {/*<div>*/}
                {/*    <button onClick={(e) => console.log(e)}>Left</button>*/}
                {/*    <button onClick={(e) => console.log(e)}>Right</button>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default App;
