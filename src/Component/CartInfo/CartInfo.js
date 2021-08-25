import React from 'react';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import logo from '../../Images/Paris-Saint-Germain-icon.png';
import './CartInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers,faMoneyBill } from '@fortawesome/free-solid-svg-icons'

const CartInfo = (props) => {
    const cart = props.cart;
  console.log(cart);
  const totalSalary = cart.reduce((sum,player) => sum + player.salary,0)
console.log(totalSalary);
// let totalSalary = 0;
// for (let i = 0; i < cart.length; i++) {
//     const element = cart[i];
//     console.log(element);
//     totalSalary = totalSalary + element.salary;
//     console.log(totalSalary);
// }
  
    
   
  
    return (
        <div class="cart-info  mt-3 text-center">
            <img src={logo} alt="" class="img-fluid center-block " />
            <h2 class=" text-warning mb-3" >Total Player</h2>
            <h5 ><FontAwesomeIcon icon={faUsers} />Total Player:{cart.length}</h5>
            <h5 ><FontAwesomeIcon icon={faMoneyBill} /> Total Salary : {totalSalary}</h5>
            <h4 class=" text-warning">Added Player</h4>
            <hr/>
            {
                cart.map(cb => <PlayerDetails pd={cb}/> )
            }
            
        </div>
    );
};

export default CartInfo;