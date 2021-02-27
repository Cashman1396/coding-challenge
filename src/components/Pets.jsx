import React, { useState } from 'react'
import PetController from './Pet/PetController'

import './style.css'
import Subtext from './Subtext/subtext'

function Pets(props) {
    const { pets } = props

    const [list, stateList] = useState([])
    
    return (
        <main>
            { pets.map((pet, index) => (
                <div className="container">
                    <PetController key={index} pet={pet} list={list} stateList={stateList}/>
                </div>
            ))}
            {list.length > 0 ? <Subtext list={list} /> : null}
        </main>
    )
}


export default Pets 


