import React from 'react';
import Headingdisplay from './Headingdisplay.jsx'
export default class Intermediate extends React.Component{
  constructor(){
    super();
  }
    render(){
       var newshead= this.props.array1.map(function(element){
       return(
           <Headingdisplay data={element} />
       )
             })
      return(
          <div>
              {newshead}
          </div>
          )
  }
}
