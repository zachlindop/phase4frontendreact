import React, {useState, useEffect}  from 'react';
import { Button, NavItem } from 'react-bootstrap'

const User = ({ user, users, setUsers }) => { 
    
    const [newUserName, setNewUserName] = useState(user.name);
    const [newFavLozGame, setNewFavLozGame] = useState(user.fav_loz_game);
    const [newPic, setNewPic] = useState(user.pic);   

    function deleteUser (userId) {
        // e.preventDefault();
        console.log(`delete user called: ${userId}`);

        fetch (`http://localhost:3001/users/${userId}`, { method: 'DELETE' })
        .then((response) => console.log(response.json()))
        let filterUsers = users.filter(eachUser => 
            eachUser.id !== userId)
            setUsers([...filterUsers])
        }

    function handleUpdateUser(userId) {
        console.log(`updating user..`);
        // e.preventDefault();

        const data = {
            "user": {
                "name": newUserName,
                "fav_loz_game": newFavLozGame,
                "pic": newPic
            }
        }
    
        fetch(`http://localhost:3001/users/${userId}`, {
          method: "PUT",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(updatedUser => {
              console.log(`user updated: ${JSON.stringify(updatedUser)}`);
              let filterUsers = users.map(eachUser => {
                  console.log(`eachUser.id: ${eachUser.id} | userId: ${userId} | ${eachUser.id === userId}`)
                  if (eachUser.id === userId ) {
                      return updatedUser;
                  }
                  else {
                      return eachUser;
                  }
              })
              setUsers([...filterUsers]);        
          })
    }


return (    

<div className = "user">
                <h2 className = "userName">{user.name}</h2>
                <h2 className = "userFavGame">{user.fav_loz_game}</h2>
                <img src={user.pic} />
                <br></br>
                <Button onClick={e => deleteUser(user.id)}>Delete User</Button>                
    <form>
    <div>
        <br></br>
    <label htmlFor='text'>
        Update User Name:
        <input type= 'text' onChange={(e) => setNewUserName(e.target.value)} value={newUserName} /><br></br>
    </label>
    <label htmlFor='text'>
        Update Favorite LOZ Game:
        <input type= 'text' onChange={(e) => setNewFavLozGame(e.target.value)} value={newFavLozGame} /><br></br>
        {/* <input type="text" value={favLozGame} onchange={(e)=>{setFavLozGame(e.target.value)}}/> <br></br> */}
    </label>
    <label htmlFor='text'>
        Update Pic:
        <input type= 'text' onChange={(e) => setNewPic(e.target.value)} value={newPic} />
        {/* <input type="text" value={pic} onchange={(e)=>{setPic(e.target.value)}}/> <br></br> */}
    </label>
    <div className="button-row">                          
              <Button onClick={() => handleUpdateUser(user.id)} variant="warning">Update User </Button>{' '}
          </div> 
    </div> 
    </form>
    </div>
    )
}

export default User;