import React,{useState,useEffect} from 'react';
import axios from './axios';
import Teacher from './Teacher';


function Main() {

    const [data,setData]=useState([])
    useEffect(() => {
      
        axios.get('/teacher')
        .then(response=>{
        setData(response.data)
        })
    },[] )
    // console.log(data)
    return (
      <div className="Main">
        <h1>Teacher list</h1>
        {data.map((tea)=>(
            <Teacher key={tea.teacherid} obj={tea}/>
        ))}
        
      </div>
    );
  }
  
  export default Main;
  