import React from 'react';
import HocTest from './HocTest.js'


function Test(props){
    console.log(props);
    return (
    <h3>{props.msg}</h3>)
}

 export default HocTest('Fuf')(Test)