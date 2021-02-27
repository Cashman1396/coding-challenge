import React, {useState, useEffect} from 'react';
import Pets from './components/Pets'
import axios from 'axios'
import './App.css'
function App() {
  const [pets, statePets] = useState([])

  const getPets = async () => {
    try {
      let URL = "http://eulerity-hackathon.appspot.com/pets"
      const response = await axios.get(URL)
      statePets(response.data)
  } catch (error) {
      console.log(`${error}`)
  }
}

useEffect(() => {
  getPets()
}, [])


return  (
  <div>
    <Pets pets={ pets } />
  </div>
  );
}


export default App