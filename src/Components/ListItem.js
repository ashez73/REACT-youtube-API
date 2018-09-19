import React from 'react';
import './ListItem.css';
const ListItem = ({title, image, handle,myKey})=>{
  return(
    <div className ='item' onClick={(e)=>handle(e, myKey)}>
    <img src ={image} alt = 'title'/>
    {title}
    </div>
  )
};
export default ListItem;