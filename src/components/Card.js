import React from "react";


function Card(props){
    return (
    <div className="card">
       <div className="top">
         <h1 className="name">{props.name}</h1>
         <img 
           className="circle-img"
           src={props.img}
           alt="Geremu" />
        </div>
    <div className="bottom">
        <h1 className="info">{props.tel}</h1>
        <h1 className="info">{props.email}</h1>
    </div>
    </div>);
}

export default Card;