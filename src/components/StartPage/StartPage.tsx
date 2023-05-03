import React from "react";
import s from "./StartPage.module.css"

type PropsType = {}
<<<<<<< HEAD
const StartPage: React.FC<PropsType> = (props) => {

    return <div className={s.p2}>
        <div>Hello!</div>
        <h4>A little bit about me</h4>
        <div></div>
        <div>My name is Kristina Uvarova. I'm 31 years old and I live in a small town Tivat of beautiful Montenegro.
        </div>
        <div>I love running, hiking, traveling and I start my coding career</div>
        <h4>My project</h4>
        <p>
            I would like to present you my project by the youtube-courses "React JS - путь самурая 1.0" & "React JS -
            путь самурая 2.0"
            <div>by IT-KAMASUTRA</div>
        </p>
=======

const StartPage: React.FC<PropsType> = (props) => {

    return <div className={s.p2}>
        {/*<div>Hello!</div>*/}
        {/*<h4>A little bit about me</h4>*/}
        {/*<div></div>*/}
        {/*<div>My name is Kristina Uvarova. I'm 31 years old and I live in a small town Tivat of beautiful Montenegro.</div>*/}
        {/*<div>I love running, hiking, traveling and I start my coding career </div>*/}
        {/*<h4>My project</h4>*/}
        {/*<p>*/}
        {/*    I would like to present you my project by the youtube-courses "React JS - путь самурая 1.0" & "React JS - путь самурая 2.0"*/}
        {/*    <div>by IT-KAMASUTRA</div>*/}
        {/*</p>*/}
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
        <p>
            Welcome to my social-network
        </p>
    </div>
}

export default StartPage;