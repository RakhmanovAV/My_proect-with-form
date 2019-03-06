import React from 'react';



function HocTest(msg){
return function (ChildComponent){
return  function (){
return <ChildComponent msg = {msg} />
}
}
}

export default HocTest
