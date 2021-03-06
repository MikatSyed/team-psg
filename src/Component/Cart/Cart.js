import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faMoneyBill, faBirthdayCake } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const Cart = (props) => {
    let [click, setClick] = useState(true)
    // console.log(props);
    const { name, img, salary, birth, id  } = props.player;

    const handleAdd = ()=>{
        props.handleAddPlayer(props.player)
        setClick(false)
    }
    const handleDelete = ()=>{
        props.handleDeletePlayer(id)
        setClick(true)
    }
    return (
        <div class="col-md-4 ">
            <div class="col">
                <div class="card mt-2 " style={{ width: "18rem" }}>
                    <img src={img} class="card-img-top" style={{ width: "100%", height: "275px" }} alt="" />
                    <div class="card-body ">
                        <h5 class="card-title text-secondary "> <FontAwesomeIcon icon={faUserAlt} /> {name}</h5>
                        <h6 class="card-text text-secondary"><FontAwesomeIcon icon={faMoneyBill} /> {salary}$</h6>
                        <h6 class="card-text text-secondary"><FontAwesomeIcon icon={faBirthdayCake} />{birth}</h6>
                       
                       {
                           click ?<div class="d-flex justify-content-center"> <button class="btn btn-primary" onClick={handleAdd} >Add</button> </div>    
                           :
                          <div class="d-flex justify-content-center"> <button class="btn btn-danger " onClick={handleDelete}>Remove</button></div>
                       }
                        
                                
                           
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;