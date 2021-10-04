import React from "react"

function User(props){
    console.log(props)

    const whoIsThis =()=>{ console.log(props.userProp.name)}


    return(
    
        <div>
    
    
            <h2>{props.userProp.name}</h2>
            <h2>{props.userProp.fav_loz_game}</h2>
            <img src={props.userProp.pic} alt={props.userProp.name} />
                onClick={whoIsThis}
    
    
        </div>
    )





}
export default User