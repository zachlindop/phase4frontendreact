import React, {useState, useEffect}  from 'react';
import { Button } from 'react-bootstrap'

const Users = ({ users, setUsers }) => {

    const [userName, setUserName] = useState('');
    const [favLozGame, setFavLozGame] = useState('');
    const [pic, setPic] = useState('');    

    function handleCreateUser(e) {
        console.log(`creating user..`);
        e.preventDefault();

        const data = {
            "user": {
                "name": userName,
                "fav_loz_game": favLozGame,
                "pic": pic
            }
        }
    
        fetch("http://localhost:3001/users", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(user => {
              console.log(`user created: ${JSON.stringify(user)}`);
              setUsers([...users, user]);
              //setShowReviewForm(!showReviewForm);
          }) 
    }


return (
<div>  
<form className="note-editor">
          <label htmlFor='text'>
              User Name:
              <input type= 'text' onChange={(e) => setUserName(e.target.value)} value={userName} />
          </label>  
          <br/>
          <label htmlFor='text'>
              Fav Loz Game:
              <input type= 'text' onChange={(e) => setFavLozGame(e.target.value)} value={favLozGame} />
          </label>   
          <br/>  
          <label htmlFor='text'>
              Pic:
              <input type= 'text' onChange={(e) => setPic(e.target.value)} value={pic} />
          </label>        
          <div className="button-row">                          
              <Button onClick={handleCreateUser} variant="warning">Create User </Button>{' '}
          </div>          
        </form>


    <div className="gameLibrary">
        {users.map((user, index) => {
            console.log(`user ${index}`);
            return (                
                <div className = "game">
                <h2 className = "gameTitle">{user.name}</h2>
                <h2 className = "gameTitle">{user.fav_loz_game}</h2>
                <img src={user.pic} />
                </div>
            )
        })}
    </div>           
    </div>
    )
}

export default Users;