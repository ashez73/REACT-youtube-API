import React from 'react';
import './VidList.css';
import ListItem from './ListItem';
class VidList extends React.Component {

render(){
  const list= this.props.list;
  const myVids=  this.props.list.map(
    (ent,i)=>{
      return (
      <ListItem key={list[i].etag} myKey ={i} title = {list[i].snippet.title} image ={list[i].snippet.thumbnails.default.url} handle = {this.props.handle}/>
      )
    });
  return(
  <div className ='VidList'>
  {myVids}
  </div>
)
}
}
export default VidList;