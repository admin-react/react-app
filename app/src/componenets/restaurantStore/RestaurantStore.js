import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { useParams } from 'react-router-dom'

import '../restaurantStore/RestaurantStore.css';

import image from '../../assets/food.jpg'


let RestaruantStore = () => {

    const { loginWithRedirect, logout } = useAuth0();
    const { user } = useAuth0();
    const { id } = useParams();


    return (
        <div className='store'>
            <div className='header' style={{ 'textAlign': 'right', 'paddingTop': '10px', 'paddingRight': '10px', 'marginBottom': '10px', 'borderBottom': '1px solid #D6D6D6', 'paddingBottom': '10px' }}>
                {user !== undefined ?
                    <div><img src={user.picture} style={{ 'height': '40px', 'width': '40px', 'borderRadius': '50%' }} alt='#' /><button className='btn btn-link' style={{ 'color': 'black', 'textDecoration': 'none', 'fontWeight': 'bold' }} onClick={() => logout()}>Log out</button></div>
                    : <button className='btn btn-light' style={{ 'borderRadius': '30px', 'fontWeight': 'bold', 'backgroundColor': '#D6D6D6' }} onClick={() => loginWithRedirect()}>Sign up</button>}
            </div>
            <div className='store-body'>
                <div className='store-header'>
                    <div className='store-banner'></div>
                    <img src={image} alt='#' className='store-logo' />
                </div>
                <div style={{ 'textAlign': 'left', 'marginTop' : '50px' }}>
                    <h1>{id}</h1>
                    <p>Restaurant</p>
                </div>
                <div className='delivery'>
                    <div  style={{ 'display':'flex', 'border':'1px solid #E6E6E6', 'borderRadius':'10px' }}>
                        <div>
                            <h4>$0.00</h4>
                            <p>delivery fee, first order</p>
                        </div>
                        <div>
                            <h4>--</h4>
                            <p>delivery time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestaruantStore;