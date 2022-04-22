import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesService } from "../api/MoviesService";

export const Movie = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    const unsubscribe = fecthMovies();
    return () => unsubscribe;
  }, []);

  const fecthMovies = async () => {
    try {
      const { data } = await MoviesService.getMoviesById(id);
      setMovie(data);
    } catch (error) {
      console.log("fecthMovies: ", error);
    }
  };

  return (
    <>
      <h1>{movie.title}</h1>
      <article>{movie.overview}</article>
    </>
  );
};
