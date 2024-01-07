import React from 'react'

export const Contacttemplate =(props)=>{

    const {props1}  =props;
    const {Header,Footer}=props1;
    const {Homepage,...otherProp} =props1;
   
     return <div>
        <Header></Header>
      
     <Footer></Footer>
        </div>
 
}