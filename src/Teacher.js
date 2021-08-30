import React,{useState,useEffect} from 'react';

function Teacher(props){
    
    useEffect(() => {
      if(props.obj.age==null){
        props.obj.age="Not mentioned"
      }
        
    },[props] )
    
   
        return(
        <div>
            <h1>{props.obj.teacherid}  {props.obj.teachername} {props.obj.age}     </h1>
        </div>
        )
}

export default Teacher;