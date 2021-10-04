import React, {useState, useEffect}  from 'react';
import { Button } from 'react-bootstrap'

const Games = ({games}) => {
    // const[newGames, setNewGames] = useState( [] )

    // useEffect( () => {
    //     fetch ("http://localhost:3001/games")
    //            .then((response) => response.json())
    //            .then(fetchedGames => {console.log(fetchedGames)
    //            setNewGames(fetchedGames)
    //          })
               
    //          }, [])
    // const [gameName, setGameName] = useState('');
    // const [gameImage, setGameImage] = useState('');
    // const [gameUser, setGameUser] = useState('');

    // function deleteGame (gameId){
    //     // e.preventDefault();
    //     console.log(`delete game called: ${gameId}`);

    //     fetch (`http://localhost:9292/games/${gameId}`, { method: 'DELETE' })
    //     .then((response) => console.log(response.json()))
    //     let filterGames = newGames.filter(eachGame => 
    //      eachGame.id !== gameId)
    //      setNewGames([...filterGames])
        

    // }

    // function handleCreateGame(e) {
    //     console.log(`creating gme..`);
    //     e.preventDefault();

    //     const data = {
    //         "game": {
    //             "game_name": gameName,
    //             "game_image": gameImage,
    //             "gamer_name": gameUser
    //         }
    //     }
    
    //     fetch("http://localhost:9292/games", {
    //       method: "POST",
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify(data)
    //     })
    //       .then(response => response.json())
    //       .then(game => {
    //           console.log(`game created: ${JSON.stringify(game)}`);
    //            setNewGames([...newGames, game]);
    //           //setShowReviewForm(!showReviewForm);
    //       }) 
    // }

return (
<div>     <div className="gameLibrary">
        


        {games.map((game, index) => {
            return (
                
                <div className = "game">
                <h2 className = "gameTitle">{game.name}</h2>
                <h2 className = "gameTitle">{game.year}</h2>
                <img src={game.image} />
                </div>
            )
        })}
    </div>           
    </div>
    )
}

export default Games;