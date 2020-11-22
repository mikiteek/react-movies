import genres from "../db/genres.json";

const getGenresHelper = (genresId) => {
  return genresId
    .map(id => genres.find(item => id === item.id).name)
    .join(", ")
}

export default getGenresHelper;