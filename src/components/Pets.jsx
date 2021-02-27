import React, { useState } from 'react'
import PetController from './Pet/PetController'
import Header from './header/header'
import './style.css'
import Subtext from './Subtext/Subtext'

function Pets(props) {
    const { pets } = props

    const [list, stateList] = useState([])
    
    return (
        <main>
            <Header />
            { pets.map((pet, index) => (
                <div className="container">
                    <PetController key={index} pet={pet} list={list} stateList={stateList}/>
                </div>
            ))}
            {list.length > 0 ? <Subtext list={ list } /> : null}
        </main>
    )
}


export default Pets 


