import React from 'react';
import {useParams} from 'react-router-dom'
let RestaruantStore = () => {

const {id} = useParams();




    return(
        <div>
            <p>Store works!: {id}</p>
        </div>
    )
}

export default RestaruantStore;