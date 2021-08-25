import React, { useEffect } from 'react';
import Data from '../../Data/Data.json';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import './Player.css'
import CartInfo from '../CartInfo/CartInfo';
const Player = () => {
    const [players, setPlayers] = useState(Data);
    const[cart,setCart] = useState([]);
    // console.log(cart);
    
    const handleAddPlayer= (player) =>{
          console.log("Add button clcicked",player);     
          const newCart = [...cart,player];
          setCart(newCart);
    }
    const handleDeletePlayer = (playerId)=>{
        console.log("Delete Clicked",playerId);
       const deleteCart = cart.filter(pd => pd.id !== playerId)
       setCart(deleteCart);
    }
    // console.log(players);
    return (
        <div class="row mt-3">
           
            <div class="col-md-9 com-sm-12">
                <div class="row ml-5 mr-5 ">
                        {
                            players.map(player=> <Cart player={player} handleAddPlayer={handleAddPlayer} handleDeletePlayer={handleDeletePlayer} key={player.id} />)  
                        }   
                </div>
            </div>
            <div class="col-md-3 " style={{borderLeft: "2px solid yellow"}}>
                <CartInfo cart={cart}/>
            </div>
        </div>
    );
};

export default Player;