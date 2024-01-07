import { useEffect } from "react";
import DetailPages from "../../pages/DetailPages/DetailPages";

export const DetailTemplate =(props)=>{

    const {props1}  =props;
    const {Header,Footer,Homepage,...otherProp}=props1;
    useEffect(()=>{
        window.scrollTo(0,0);
 })
   
     return <div>
        <Header></Header>
    <DetailPages props1={otherProp}>

    </DetailPages>
     <Footer></Footer>
        </div>
 
}