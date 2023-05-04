import { useState,useEffect } from "react";
import { Fade,Slide } from "react-awesome-reveal";
import MyButton from "../button/button";
import { PropaneSharp } from "@mui/icons-material";

const Discount =()=>{

    const end = 30;
    const [start,setStart]=useState(0);
    
    const procentage=()=>{
        if(start<end){
            setStart(prevCount =>prevCount+1)
        }
    }

    useEffect(()=>{
        if(start>0 && start<30){
            setTimeout(()=>{
                setStart(prevCount =>prevCount +1)
            },30)
        }
    },[start])
    
    return(
        <div className = "center_wrapper">
            <div className="discount_wrapper">

                <Fade onVisibilityChange={(inView)=>{
                    if(inView){
                        procentage()
                    }
                }}>
                    <div className="discount_procentage">
                        <span>{start}%</span>
                        <span>off</span>
                    </div>    
                </Fade>
                <Slide right={true}>
                    <div className="discount_description">
                        <h3>Buy Tickets Before The Harvest Festival</h3>
                  
                        <MyButton
                            text = "Purchase Tickets"
                            link="http://google.com"
                            size ='small'
                            style={{
                             background:'#8e8e8e',
                             color:"#ffffff",
                           }}
                           iconTicket={true}
                        />
                    </div>
                </Slide>

            </div>
        </div>
    )
}

export default Discount;