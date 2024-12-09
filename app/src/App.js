import { useEffect, useState } from 'react'
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';
// f5c2167b

const API_URL = 'http://www.omdbapi.com/';
function App() {

  const [movies, setMovies] = useState([]);
  const [searchTearm,setSearchTerm]= useState("");


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}?s=${title}&apikey=f5c2167b`);
    const data = await response.json();

    setMovies(data.Search)
  }

 

  useEffect(() => {
    searchMovies('Spiderman')
  }
  ,[])
  return (
    <div className="App">
      <h1>MovieLand</h1>
      <div className='search'>
        <input placeholder='Search for movies' value={searchTearm} onChange={(e) => setSearchTerm(e.target.value)} />
        <img src={SearchIcon} alt='search' onClick={() => searchMovies(searchTearm)} />
      </div>
      {
        movies?.length > 0
          ? (
            <div className='container'>
              {movies.map((movie) => (<MovieCard movie={movie}></MovieCard>))}


            </div>)
          :
          (
            <div className='empty'>
              <h2>No movies found</h2>
            </div>
          )
      }


    </div>
  );
}

export default App;
