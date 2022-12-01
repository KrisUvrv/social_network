import loader from "../../../assets/images/loader.png";
import React from "react";

let Preloader = (props) => {
   return <div style={{backgroundColor: 'white'}}>
    <img src={loader} />
   </div>
}

export default Preloader;