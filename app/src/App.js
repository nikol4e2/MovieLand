import {useEffect} from 'react'
import './App.css';
import SearchIcon from './search.svg'

// f5c2167b

const API_URL = 'http://www.omdbapi.com/';
function App() {
  const searchMovies = async (title) =>{
    const response = await fetch(`${API_URL}?s=${title}&apikey=f5c2167b`);
    const data =await response.json();

    console.log(data.Search)
  }

  useEffect(()=>{
      searchMovies('Spiderman')
  }
  )
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies' value="Superman" onChange={()=>{}}/>
      
      </div>
      <img src={SearchIcon} alt='search'/>
    </div>
  );
}

export default App;
