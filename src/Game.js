import React from "react"

function Game(props){
    console.log(props)


    return(<>
    
    
        <h2>{props.userGame.name}</h2>
        <img src={props.userGame.image} alt={props.userGame.name} />
        <h2>{props.userGame.system}</h2>
        <h2>{props.userGame.year}</h2>
        <h2>{props.userGame.rating}</h2>
        <h2>{props.userGame.user_id}</h2>    
    
    
    </>)

}
export default Game

    // name:"The Legend of Zelda: Spirit Tracks",
    // image: 
    // system: "DS",
    // year: 2009,
    // rating: "⭐️7.2",
    // user_id: