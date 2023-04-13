import loader from "../../../assets/images/loader.png";
import React from "react";

type PropsType = {}
let Preloader: React.FC<PropsType> = (props) => {
    return <div>
        <img src={loader}/>
    </div>
}

export default Preloader;