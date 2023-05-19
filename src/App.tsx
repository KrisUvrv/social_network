import React, {Suspense, useEffect, useState} from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import Preloader from "./components/common/Preloader/Preloader";
import {Route, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {UsersPage} from "./components/Users/UsersContainer";
import {Login} from "./components/Login/Login";
import StartPage from "./components/StartPage/StartPage";
import {HeaderBlock} from "./components/Header/Header";
import s from './App.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/redux_store";
import {initializeApp} from "./redux/app_reducer";
import {navigationItems} from "./components/Navbar/Navbar";
import logo from './/assets/images/pngegg.png'


const {Content, Footer, Sider} = Layout;

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

export const App: React.FC = () => {
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    const initialized = useSelector((state: AppStateType) => state.app.initialized);
    const dispatch = useDispatch()
    const toInitializeApp = () => {
        dispatch(initializeApp())
    }

    useEffect(() => {
        toInitializeApp();
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors);
        return () => {
            window.removeEventListener("unhandledrejection", catchAllUnhandledErrors);
        }
    }, [toInitializeApp]);

    const catchAllUnhandledErrors = (e: PromiseRejectionEvent) => {
        alert("some error occurred");
        //console.error(promiseRejectionEvent);
    }

    if (!initialized) {
        return <Preloader />
    }

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className={s.logo}>
                    <img src={logo} alt=""/>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    items={navigationItems.map(
                        (item, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(item.icon),
                            label: item.label,
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <HeaderBlock style={{padding: 0, background: colorBgContainer}}/>
                <Content>
                    <div style={{padding: 24, minHeight: 360, background: colorBgContainer}}>
                        <Suspense fallback={<div><Preloader/></div>}>
                            <Routes>
                                <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                <Route path='/' element={<ProfileContainer/>}/>
                                <Route path='/profile/' element={<ProfileContainer/>}/>
                                <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                                <Route path='/users' element={<UsersPage pageTitle={"Samurai"}/>}/>
                                <Route path='/login' element={<Login/>}/>
                                <Route path='*' element={<div>404 NOT FOUND</div>}/>
                                <Route path='/social_network' element={<StartPage/>}/>
                            </Routes>
                        </Suspense>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};