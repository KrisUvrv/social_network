import React, {Suspense} from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from 'react-router-dom';

import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/common/Preloader/Preloader";
import StartPage from "./components/StartPage/StartPage";


const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("some error occured");
        //console.error(promiseRejectionEvent);
}

    componentDidMount() {
        this.props.initializeApp();
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path='/dialogs/*'
                                   element={<DialogsContainer/>}/>
                            <Route path='/'
                                   element={<ProfileContainer/>}/>
                            <Route exact path='/profile/'
                                   element={<ProfileContainer/>}/>
                            <Route path='/profile/:userId'
                                   element={<ProfileContainer/>}/>
                            <Route path='/users'
                                   element={<UsersContainer pageTitle={"Samurai"}/>}/>
                            <Route path='/login'
                                   element={<Login/>}/>
                            <Route path='*'
                                   element={<div>404 NOT FOUND</div>}/>
                            <Route path='/social_network'
                                   element={<StartPage/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
