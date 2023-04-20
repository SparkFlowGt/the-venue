import { useState,useEffect,useCallback } from "react";
import { Slide } from "react-awesome-reveal";


const TimeUntil = ()=>{
    
    const renderItem =(time,value) =>(
        <div className="countdown_item">
          <div className="countdown_time">
            {time}
           </div>

         <div className="countdown_tag">
            {value}
        </div>
    </div>
    )
    
    const getTimeUntil= (deadline) =>{
        const time = Date.parse(deadline) - Date.parse(new Date());
        if(time<0){
            
        }else{

        }
    }
    useEffect(()=>{
        setInterval(()=>getTimeUntil('Mar,20,2023,01:20.00'),1000) 
    },[getTimeUntil])
    
    return(
        <Slide left delay={1000}>
           <div className="countdown_wrapper">
                <div className="countdown_top"> 
                Event starts in
                </div>
                <div className="countdown_bottom">
  
                    {renderItem(27,'Days')}
                    {renderItem(4,'hours')}
                    {renderItem(3,'minutes')}
                    {renderItem(3,'Sec')}


                </div>
            </div> 
        </Slide>
    )
}

export default TimeUntil;