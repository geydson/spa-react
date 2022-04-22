import { MovieItem } from "./MovieItem";

export const MoviesList = ({ movies }) => (
  <section>
    <ul>
      {movies.map((m, index) => (
        <MovieItem key={index} {...m} />
      ))}
    </ul>
  </section>
);
