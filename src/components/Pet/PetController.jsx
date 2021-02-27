//This controller controls information for the pets
import React, { useState } from 'react' 

import './pet-styles.css' 

function PetController(props) {
    const {pets, list, stateList} = props

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
            <img className={`img-pets ${selectedImg && "selected-img"}`} src={pets.url} crossOrigin="anonymous" alt={pets.title}></img>
            <div className="text">
                <h2 className="pet-title">{pets.title}</h2>
                {petsDate(pets.created)}
                <p className="description">{pets.description}</p>
                <div className="download-btn-controller">
                    <button onClick={(e) => handleClick(pets) } className="download-btn">Select Image</button>
                </div>
            </div>
        </div>
       </>
   )

}

export default PetController