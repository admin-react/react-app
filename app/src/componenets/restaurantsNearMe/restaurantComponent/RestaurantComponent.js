import React, { useState } from 'react';
import '../restaurantComponent/RestaurantComponent.css'

import image1 from '../../../assets/thirteen/trinaestica-1.jpg'
import image2 from '../../../assets/thirteen/trinaestica-2.jpg'
import image3 from '../../../assets/thirteen/trinaestica-3.jpg'
import image4 from '../../../assets/thirteen/trinaestica-4.jpg'

let RestaurantComponent = (props) => {


    const [showPopular, setShowPopular] = useState(false)


    let showHidePopular = () => {
        setShowPopular(!showPopular);
    }

    let popularItems = 'Hello'
    if(props.data.dishes){
    popularItems = JSON.parse(props.dishes).map((el, index)=>(
        <div className='popular-item' key={index}>
        <hr></hr>
        <h6 style={{ 'display': 'inline' }}>{el.name}</h6>
        <h6 style={{ 'display': 'inline', 'float': 'right' }}>{el.price}0$</h6>
        <p>{el.description}</p>
    </div>
    ))
    }

    return (
        <div style={{ 'display': 'flex', 'justifyContent': 'center', 'textAlign': 'left', 'marginTop': '0px', 'marginBottom':'15px' }}>
            <div>
                <div className='restauran-main'>
                    <div style={{ 'display': 'flex' }}>
                        <img width={125} height={125} src={image2} alt='#' />
                        <img width={125} height={125} src={image1} alt='#' style={{ 'marginLeft': '10px' }} />
                        <img width={125} height={125} src={image3} alt='#' style={{ 'marginLeft': '10px' }} />
                        <img width={125} height={125} src={image4} alt='#' style={{ 'marginLeft': '10px' }} />
                    </div>
                    <h5>{props.data.name}</h5>
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