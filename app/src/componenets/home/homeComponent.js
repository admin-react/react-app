import React from 'react';
import './homeComponent.css';
import CountUp from 'react-countup';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

import driver from '../../assets/ScootScoot.svg';
import store from '../../assets/Storefront.svg';
import phone from '../../assets/iphone.svg';
import food from '../../assets/food.jpg';


let HomeComponent = () => {

    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0()
    const { user } = useAuth0()
    let userData = JSON.stringify(user, null, 2);
    userData!==undefined?console.log(userData):console.log('nothing')
    

    return (
        <div>
            <div className='overview'>
                <div className='header' style={{ 'textAlign':'right', 'paddingTop':'10px', 'paddingRight':'10px' }}>
                    {userData!==undefined?
                    <button className='btn btn-link' style={{ 'color':'white', 'textDecoration':'none', 'fontWeight':'bold' }} onClick={()=>logout()}>Log out</button>
                    :<button className='btn btn-light' style={{ 'borderRadius':'30px', 'fontWeight':'bold' }} onClick={()=>loginWithRedirect()}>Sign up</button>}
                    
                </div>
                <div style={{ 'marginTop':'50px', 'fontSize':'36' }}>
                    <h1>Restaurants and more,</h1>
                    <h1>delivered to your door</h1>
                    <div>
                        <input type='text' placeholder='Enter delivery adress' style={{ 'marginTop':'100px', 'borderRadius':'15px 0px 0px 15px', 'border':'none', 'height':'40px', 'width':'250px' }}></input>
                        <button style={{ 'borderRadius':'0px 15px 15px 0px', 'border':'none', 'backgroundColor':'white', 'height':'41px'}}>Enter</button>
                    </div>
                    <h6 style={{ 'marginTop':'10px' }}>Sign in for saved adress</h6>
                </div>                
            </div>
            <div className='promotions' style={{ 'marginTop':'150px' }}>
                <div className='row'>
                    <div className='col-3'></div>
                    <div className='col-2'>
                        <img src={driver} alt='#'/>
                        <h2>Become a driver</h2>
                        <h5><CountUp delay={0.5} start={0} end={2200} duration={2.5} />+ courieres.</h5>
                        <p>As a delivery driver, you'll make reliable money—working anytime, anywhere.</p>
                        <button className='btn btn-link' style={{ 'textDecoration':'none', 'color':'#EB1700', 'fontWeight':'bold' }}>Start earning</button>
                    </div>
                    <div className='col-2'>
                        <img src={store} alt='#'/>
                        <h2>Become a Partner</h2>
                        <h5><CountUp delay={0.5} start={0} end={110} duration={2.5} />+ restaurants.</h5>
                        <p>Grow your business and reach new customers by partnering with us.</p>
                        <button className='btn btn-link' style={{ 'textDecoration':'none', 'color':'#EB1700', 'fontWeight':'bold' }}>Sign up your store</button>
                    </div>
                    <div className='col-2'>
                        <img src={phone} alt='#' style={{ 'height':'155px' }}/>
                        <h2>Try the app</h2>
                        <h5><CountUp delay={0.5} start={0} end={85000} duration={2.5} />+ users.</h5>
                        <p>Experience the best your neighborhood has to offer, all in one app.</p>
                        <button className='btn btn-link' style={{ 'textDecoration':'none', 'color':'#EB1700', 'fontWeight':'bold' }}>Get the app</button>
                    </div>
                </div>
            </div>
            <div className='promorestaurants' style={{ 'marginTop':'100px', 'backgroundColor':'#f1e5f0', 'padding': '50px'}}>
            <img src={food} alt='#'/>
                <div>
                    <h2>Every Flavor Welcome</h2>
                    <p>From your neighborhood sushi spot to the burger and fries you crave, </p>
                    <p>choose from over 300,000 local and national favorites across the country.</p>
                    <Link to={'/restaurants-near-me'} className='btn btn-light' style={{ 'borderRadius':'30px', 'fontWeight':'bold', 'color':'white', 'backgroundColor': '#EB1700'}}>Check restaurants</Link>
                </div>
            </div>
            <div className='footer' style={{ 'height':'30px', 'color':'gray', 'backgroundColor':'#191919' }}>
                <p>Frite Bistro 2022</p>
            </div>
        </div>            

    )
}

export default HomeComponent;