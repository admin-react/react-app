import React, { useEffect, useState } from 'react';
import '../restaurantsNearMe/restaurantsNearMe.css';
import { useAuth0 } from '@auth0/auth0-react';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';

import RestaurantComponent from './restaurantComponent/RestaurantComponent.js';


let RestaurantsNearMe = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0()
    const { user } = useAuth0()


    const [data, setData] = useState(null)



    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/restaurants/overview').then((response) => {
            setData(response.data)
            console.log(JSON.parse(response.data[0].dishes))
        });
    }, [])


    let ShowRestaurants = ''
    if (data) {
        ShowRestaurants = data.map((el, index) => (
            <RestaurantComponent data={data[index]} key={index} dishes={data[index].dishes} />
        ))
    }


    return (
        <div>
            <div className='header' style={{ 'textAlign': 'right', 'paddingTop': '10px', 'paddingRight': '10px', 'marginBottom': '10px' }}>
                {user !== undefined ?
                    <div><img src={user.picture} style={{ 'height': '40px', 'width': '40px', 'borderRadius': '50%' }} alt='#' /><button className='btn btn-link' style={{ 'color': 'black', 'textDecoration': 'none', 'fontWeight': 'bold' }} onClick={() => logout()}>Log out</button></div>
                    : <button className='btn btn-light' style={{ 'borderRadius': '30px', 'fontWeight': 'bold', 'backgroundColor': '#D6D6D6' }} onClick={() => loginWithRedirect()}>Sign up</button>}

            </div>
            <div className='restaurant-overview'>
                <h2 >Restaurants near me</h2>
                <p>Order online for Frite Bistro's super-fast delivery or pick-up.</p>
                <input type="text" className="form-control" placeholder="Enter delivery adress" style={{ 'width': '400px' }} />
            </div>
            <div className='restaurants' style={{ 'marginTop': '50px' }}>
                <div>
                    {data ?
                        <div style={{ 'marginRight': '50px', 'display': 'flex', 'justifyContent': 'center', 'textAlign': 'left' }}>
                            <div style={{ 'marginRight': '20px' }}>
                                <h3>Best restaurants in Čačak</h3>
                                <p>43 restaurants in Čačak</p>
                            </div>
                            <div>
                                {ShowRestaurants}
                            </div>
                        </div>
                        : <CircularProgress />}
                </div>
            </div>
        </div>
    )
}

export default RestaurantsNearMe;