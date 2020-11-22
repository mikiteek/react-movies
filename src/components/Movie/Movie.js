import React, {Component} from "react";
import queryConstants from "../../const/queryConstants";
import movieSchema from "../../db/movie-schema.json";
import getGenresHelper from "../../helpers/getGengesHelper";
import styles from "./Movie.module.scss";

class Movie extends Component {
  render() {
    const {name, first_air_date, release_date, genre_ids, poster_path} = movieSchema;
    const poster = poster_path? `${queryConstants.poster}${poster_path}`: `${queryConstants.pldPosterList}text=${name}`;
    const genres = getGenresHelper(genre_ids);
    const release = release_date? new Date(release_date).getFullYear(): new Date(first_air_date).getFullYear();

    return (
      <li className={styles.listItem}>
        <div className={styles.imageBlock}>
          <img className={styles.image} src={poster} alt={name}/>
        </div>
        <div>
          <h3 className={styles.title}>{name}</h3>
          <p className={styles.description}>
            {genres}| {release}
          </p>
        </div>
      </li>
    );
  }
}

export default Movie;