import { useState, useEffect } from "react";
import Header from "./Components/Header";
import MovieScreen from "./Components/MovieScreen";
import WatchList from "./Components/WatchList";
import "./App.css";
import axios from "axios";

function App() {
  const [movie, setMovie] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

  
  async function getData() {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
      );
      console.log(res.data.results);
      setMovie(res.data.results);
    }
    
    useEffect(() => {
      getData();
    }, [page]);
    
    
    function addMovie(movie) {
      setWatchList([...watchList, movie]);
    }
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          watchList={watchList}
          page={page}
          setPage={setPage}
          movieList={movie}
          addMovie={addMovie}
        />
        <WatchList watchList={watchList} />
      </main>
    </div>
  );
}

export default App;
