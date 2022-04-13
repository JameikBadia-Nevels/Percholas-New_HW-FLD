import './App.css';
import {useState, useEffect} from 'react'
import axios from 'axios'


function App() {
 const [starWars, setStarWars] = useState([])

 useEffect( () => {
   axios.get('https://swapi.dev/api/starships')
   .then(res => setStarWars(res.data.results)
   )}, []
)
console.log(starWars)

  return (
  
    <div className="contacts">
    <ul>
    {starWars.map((ship,index) => {
      return(
      <li className='contact-card' key = {index}> {ship.name} </li>
      )
    }) }
    </ul>
    </div>
  );
}

export default App;
