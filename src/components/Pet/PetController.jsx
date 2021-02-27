//This controller controls information for the pets
import React, { useState } from 'react' 

import './pet-styles.css' 

function PetController(props) {
    const {pet, list, stateList} = props

    const [selectedImg, stateSelectedImg] = useState(false)

    const petsDate = (data) => {
        const date = data.split(" ")
        return (
            <>
                <p>{`This pet joined on ${date[0]}, ${date[1]}, ${date[2]}, ${date[date.length - 1]}` }</p>
            </>
        )
    }

   const handleClick = (data) => {
       if (list.includes(data)) {
           stateList(list.filter(item => item !== data))
           stateSelectedImg(false)
       } else {
           const newPets = list.concat(data)
           stateList(newPets)
           stateSelectedImg(true)
       }
   } 

   return (
       <>
        <div className="img-container">
            <button onClick={(e) => handleClick(pet) }>
            <img className={`img-pets ${selectedImg && "selected-img"}`} src={pet.url} crossOrigin="anonymous" alt={pet.title}></img>
            </button>
            <div className="text">
                <h2 className="pet-title">{pet.title}</h2>
                {petsDate(pet.created)}
                <p className="description">{pet.description}</p>
                <div className="download-btn-controller">
                    <button onClick={(e) => handleClick(pet) } className="download-btn">Select Image</button>
                </div>
            </div>
        </div>
       </>
   )

}

export default PetController;