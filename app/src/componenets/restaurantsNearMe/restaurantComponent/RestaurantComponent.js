import React, { useState } from 'react';
import '../restaurantComponent/RestaurantComponent.css'

import image1 from '../../../assets/thirteen/trinaestica-1.jpg'
import image2 from '../../../assets/thirteen/trinaestica-2.jpg'
import image3 from '../../../assets/thirteen/trinaestica-3.jpg'
import image4 from '../../../assets/thirteen/trinaestica-4.jpg'

let RestaurantComponent = () => {

    
    const [showPopular, setShowPopular] = useState(false)


    let showHidePopular = () => {
        setShowPopular(!showPopular);
    }



    return (
        <div style={{ 'display':'flex', 'justifyContent':'center', 'textAlign':'left' }}>
            <div style={{ 'marginRight':'50px'}}>
                <h3>Best restaurants in Čačak</h3>
                <p>43 restaurants in Čačak</p>
            </div>
            <div>
                <div className='restauran-main'>
                    <div style={{'display':'flex'}}>
                        <img width={125} height={125} src={image2} alt='#'/>
                        <img width={125} height={125} src={image1} alt='#' style={{ 'marginLeft':'10px' }}/>
                        <img width={125} height={125} src={image3} alt='#' style={{ 'marginLeft':'10px' }}/>
                        <img width={125} height={125} src={image4} alt='#' style={{ 'marginLeft':'10px' }}/>
                    </div>
                    <h5>Thirteeen</h5>
                    <p>Cara Lazara 60</p>
                    <p style={{ 'display':'inline' }}>9.2/10 - 567 ratings</p>
                    <button className='btn btn-light' style={{ 'display':'inline', 'float':'right'}} onClick={()=>showHidePopular()}>Popular items</button>
                    {showPopular === true?
                    <div className={'popular-items'}>
                        <div className='popular-item'>
                            <hr></hr>                          
                            <h6 style={{ 'display':'inline' }}>Filled meat "Thirteen"</h6>
                            <h6 style={{ 'display':'inline', 'float':'right'}}>5.50$</h6>
                            <p>Beef filled with mozzarella cheeze, rolled in bacon and baked served with baked pottato. </p>

                        </div>
                    </div>
                    :null}
                </div>
            </div>
        </div>
    )
}

export default RestaurantComponent;