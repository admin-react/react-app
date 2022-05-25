import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';

import '../restaurantStore/RestaurantStore.css';
import CircularProgress from '@mui/material/CircularProgress';

import image from '../../assets/sandy-logo.jpg'


let RestaruantStore = () => {

    const { loginWithRedirect, logout, user } = useAuth0();
    const { id } = useParams();

    const [data, setData] = useState(null);
    const [cart, setCart] = useState([]);


    useEffect(() => {

        let fetchData = () => {
            axios.get(`http://localhost:8000/api/v1/restaurants/menu/overview/${id}`).then((res) => {

                setData(JSON.parse(res.data[0].menu))

            })
        }

        fetchData()
    }, [id])


    let storeItems = null
    if (data) {

        storeItems = data.map((el, index) => {

            let storeItem = el.data.map((el, index) => (
                <div className='store-item' key={index} onClick={() => addItemToCart(el.name, el.description, el.price)}>
                    <div>
                        <h6>{el.name}</h6>
                        <p>{el.description}</p>
                        <h6>{el.price}0$</h6>
                    </div>
                </div>
            ))
            return (
                <div key={index}>
                    <h3>{el.category}</h3>
                    {storeItem}
                </div>
            )
        })
    }


    ;

    let addItemToCart = (name, description, price) => {
        let cartArray = [...cart]
        console.log(name, description, price)
        cartArray.push({
            name: name,
            description: description,
            price: price
        })
        setCart(cartArray)
        console.log(cart)
    }

    let renderCart = cart.map((el, index) => (
        <div className='cart-item' key={index}>
            <h6>{el.name}</h6>
            <p>{el.description}</p>
            <p>{el.price}0$</p>
            <hr></hr>
            <div style={{ 'textAlign': 'right', 'paddingRight': '10px' }}>
                <h6>Total: 50.0$</h6>
            </div>
        </div>
    ))


    return (
        <div className='store'>
            {data ?
                <div>
                    <div className='header' style={{ 'textAlign': 'right', 'paddingTop': '10px', 'paddingRight': '10px', 'marginBottom': '10px', 'borderBottom': '1px solid #D6D6D6', 'paddingBottom': '10px' }}>
                        {user !== undefined ?
                            <div><img src={user.picture} style={{ 'height': '40px', 'width': '40px', 'borderRadius': '50%' }} alt='#' /><button className='btn btn-link' style={{ 'color': 'black', 'textDecoration': 'none', 'fontWeight': 'bold' }} onClick={() => logout()}>Log out</button></div>
                            : <button className='btn btn-light' style={{ 'borderRadius': '30px', 'fontWeight': 'bold', 'backgroundColor': '#D6D6D6' }} onClick={() => loginWithRedirect()}>Sign up</button>}
                    </div>
                    <div style={{ 'display': 'flex' }}>
                        <div className='store-body' style={{ 'flex': '5' }}>
                            <div className='store-header'>
                                <div className='store-banner'></div>
                                <img src={image} alt='#' className='store-logo' />
                            </div>
                            <div style={{ 'textAlign': 'left', 'marginTop': '50px', 'marginBottom': '20px' }}>
                                <h1>{id}</h1>
                                <p>{data.adress}</p>
                            </div>
                            <div className='delivery' style={{ 'textAlign': 'left' }}>
                                <div style={{ 'display': 'inline-block', 'textAlign': 'center' }}>
                                    <div style={{ 'display': 'flex', 'border': '1px solid #E6E6E6', 'borderRadius': '10px', 'padding': '0px 10px' }}>
                                        <div style={{ 'paddingRight': '20px', 'marginRight': '20px', 'borderRight': '1px solid #E6E6E6' }}>
                                            <h4>$0.00</h4>
                                            <p>delivery fee, first order</p>
                                        </div>
                                        <div>
                                            <h4>--</h4>
                                            <p>delivery time</p>
                                        </div>
                                    </div>
                                </div>

                                <div style={{ 'float': 'right', 'display': 'inline-block' }}>
                                    <button>Delivery</button>
                                    <button>Pickup</button>
                                </div>
                            </div>
                            <div style={{ 'textAlign': 'left', 'backgroundColor': '#E6E6E6', 'padding': '10px', 'margin': '30px 0px', 'borderRadius': '10px' }}>
                                <h5>Enter Your Delivery Address</h5>
                                <p style={{ 'color': 'gray' }}>This will help us confirm the store's availability and delivery fees.</p>
                                <input type="text" className="form-control" placeholder="Adress" />
                                <button className='btn btn-link' style={{ 'color': 'gray' }}>Sign in for saved address</button>
                            </div>
                            <hr></hr>
                            <div className='store-cart'>
                                <h5>Full menu</h5>
                                <p>9:00 am - 22:30 pm</p>
                                <div>
                                    {storeItems}
                                </div>
                            </div>
                        </div>
                        <div style={{ 'flex': '1', 'borderLeft': '1px solid #E6E6E6' }}>
                            {renderCart}
                        </div>
                    </div>
                </div>
                : <CircularProgress style={{ 'marginTop': '50px' }} />}
        </div>
    )
}

export default RestaruantStore;