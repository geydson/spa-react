import { useEffect, useState } from "react";
import { MoviesService } from "../api/MoviesService";
import { MoviesList } from "../components/MoviesList";
import { MoviesContainer } from "../styles/MoviesContainer";

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const unsubscribe = fecthMovies();
    return () => unsubscribe;
  }, []);

  const fecthMovies = async () => {
    try {
      const { data } = await MoviesService.getMovies();
      setMovies(data.results);
    } catch (error) {
      console.log("fecthMovies: ", error);
    }
  };

  return (
    <MoviesContainer>
      <MoviesList movies={movies} />
    </MoviesContainer>
  );
};
