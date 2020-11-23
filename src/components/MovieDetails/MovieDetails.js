import React, {Component} from "react";
import movieDetailsSchema from "../../db/movie-details.json";
import queryConstants from "../../const/queryConstants";
import styles from "./MovieDetails.module.scss";

class MovieDetails extends Component {
  render() {
    const {poster_path, title, vote_average, vote_count, popularity, original_title, genres, overview} = movieDetailsSchema;
    const poster = poster_path? `${queryConstants.poster}${poster_path}`:`${queryConstants.pldPosterList}text=${title}`;
    const genresToRender = genres.map(genre => genre.name).join(", ");
    return (
      <section className={styles.sectionMovieDetails}>
        <h2 className="visually-hidden">Movie details</h2>
        <div>
          <img className={styles.image} src={poster} alt={title}/>
        </div>
        <div>
          <h3>{title}</h3>
          <table>
            <tr>
              <td>Vote / Votes</td>
              <td>{vote_average} / {vote_count}</td>
            </tr>
            <tr>
              <td>Popularity</td>
              <td>{popularity}</td>
            </tr>
            <tr>
              <td>Original title</td>
              <td>{original_title}</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>{genresToRender}</td>
            </tr>
          </table>
          <p>About</p>
          <p>{overview}</p>
          <button type="button">Add to watched</button>
          <button type="button">Add to queue</button>
        </div>
      </section>
    );
  }
}

export default MovieDetails;