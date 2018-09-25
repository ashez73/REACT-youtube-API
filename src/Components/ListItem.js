import React from 'react';
import './ListItem.css';
import PropTypes from 'prop-types';
const ListItem = ({title, image, handle,myKey})=>{
  return(
    <div className ='item' onClick={(e)=>handle(e, myKey)}>
    <img src ={image} alt = 'title'/>
    {title}
    </div>
  )
};
ListItem.propTypes = {
  title: PropTypes.object,
  image: PropTypes.string,
  handle:PropTypes.string,
  myKey: PropTypes.string
};
export default ListItem;