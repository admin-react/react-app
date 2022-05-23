import React, { useState } from 'react';
import '../restaurantComponent/RestaurantComponent.css';
import { Link } from 'react-router-dom';


let RestaurantComponent = (props) => {


    const [showPopular, setShowPopular] = useState(false)
    

    let showHidePopular = () => {
        setShowPopular(!showPopular);
    }

    let popularItems = ''
    let dishImages = ""
    if(props.data.dishes){
    popularItems = JSON.parse(props.dishes).map((el, index)=>(
        <div className='popular-item' key={index}>
        <hr></hr>
        <h6 style={{ 'display': 'inline' }}>{el.name}</h6>
        <h6 style={{ 'display': 'inline', 'float': 'right' }}>{el.price}0$</h6>
        <p>{el.description}</p>
    </div>
    ))

    dishImages = JSON.parse(props.dishes).map((el, index)=>(
        <img width={125} height={125} src={el.image} alt='#' style={{ 'marginLeft': '6px' }} key={index} />
    ))
    }

    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'textAlign': 'left', 'marginTop': '0px', 'marginBottom':'15px' }}>
            <div>
                <div className='restauran-main'>
                    <div style={{ 'display': 'flex' }}>
                        {dishImages}
                    </div>
                    <h5><Link to={'/store/'+props.data.name} style={{ 'color':'black', 'textDecoration':'none' }}>{props.data.name}</Link></h5>
                    <p>{props.data.adress}</p>
                    <p style={{ 'display': 'inline' }}>9.2/10 - 567 ratings</p>
                    <button className='btn btn-light' style={{ 'display': 'inline', 'float': 'right' }} onClick={() => showHidePopular()}>Popular items</button>
                    {showPopular === true ?
                        <div className={'popular-items'}>
                            {popularItems}
                        </div>
                        : null}
                </div>
            </div>
        </div>
    )
}

export default RestaurantComponent;