import React, { useEffect, useState } from 'react'

export default function Resturent() {
  let [resturent,setResturent]=useState([]);
  const getResturent=async()=>{
    let respose=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
    let data=await respose.json();
    setResturent(data.recipes);
  }
  useEffect(()=>{
    getResturent();
  },[]);
  return (
    <div className='row'>
    {
    resturent.map((ele)=>{
      return <div className='col-md-4' key={ele.recipe_id}>
        <h2>{ele.publisher}</h2>
        <h2>{ele.title}</h2>
        <img src={ele.image_url}className='w-100 img-fluid'/>
        </div>
    
  })
    }
  </div>
  )
}
