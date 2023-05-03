import loader from "../../../assets/images/loader.png";
import React from "react";

type PropsType = {}
<<<<<<< HEAD

let Preloader: React.FC = (props) => {
=======
let Preloader: React.FC<PropsType> = (props) => {
>>>>>>> 033855721f1b7029c861996ec75fe7945858c878
    return <div>
        <img src={loader}/>
    </div>
}

export default Preloader;