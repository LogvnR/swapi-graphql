import { useQuery } from '@apollo/client';
import { graphql } from '../../../gql/gql';

export const GET_FILMS = graphql(/* GraphQL */ `
  query Query {
    allFilms {
      films {
        id
        episodeID
        title
      }
    }
  }
`);

interface FilmSelectorProps {
  setFilm: (id: string) => void;
}

const FilmSelector = ({ setFilm }: FilmSelectorProps) => {
  const { data, loading } = useQuery(GET_FILMS);

  if (loading) return <p>Loading...</p>;

  console.log('All Films', data);
  return (
    <select name="film" id="film" onChange={(e) => setFilm(e.target.value)}>
      <option value="0">Select A Film</option>
      {data?.allFilms?.films?.map((film) => (
        <option value={film?.id} key={film?.episodeID}>
          {film?.title}
        </option>
      ))}
    </select>
  );
};

export default FilmSelector;
