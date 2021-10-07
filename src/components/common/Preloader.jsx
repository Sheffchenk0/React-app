import React from 'react';
import preloader from '../../images/svg/loader.svg';
let Preloader = (props)=>{
    return(
        <img src={preloader} style={{width: '100px'}} alt="loading..."/> 
    );
};

export default Preloader;