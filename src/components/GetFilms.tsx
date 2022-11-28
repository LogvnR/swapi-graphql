import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';

// const GET_FILMS = graphql(/* GraphQL */ `
//   query GetFilms($filmId: ID) {
//     film(filmID: $filmId) {
//       title
//       releaseDate
//     }
//   }
// `);

const GET_FILM = graphql(/* GraphQL */ `
  query GetFilm($filmId: ID) {
    film(filmID: $filmId) {
      title
      releaseDate
    }
  }
`);

interface FilmProps {
  filmId: string;
}

const GetFilm = ({ filmId }: FilmProps) => {
  const { data, loading } = useQuery(GET_FILM, {
    variables: {
      filmId: filmId,
    },
  });

  // render something else when loading...

  if (loading) return <p>Loading...</p>;
  console.log(data);

  return <></>;
};

export default GetFilm;
