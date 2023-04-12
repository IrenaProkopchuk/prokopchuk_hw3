import React from "react";

const ArrayItem = (props) =><h4>{props.num}</h4>

export class MyList extends React.Component {  
  
    render(){
const array = ["Olena", "Ivan", "Vasyl", "Volodymyr", "Svitlana"];


      return (
        <div>
           {array.map((num, idx) => {
            return(
                 <ArrayItem key = {idx} num={num} />
            )
           
           })}  
        </div>
    
      )
    }
  }

  export default MyList