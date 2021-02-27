import React, {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [pets, statePets] = useState([])

  const getPets = async() => {
    try {
      URL = "http://eulerity-hackathon.appspot.com/pets"
      const response = await axios.get(URL)
      statePets(response.data)
  } catch (error) {
      console.log(`${error}`)
  }
}



export default App