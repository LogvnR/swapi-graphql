import { useQuery } from '@apollo/client';
import { graphql } from '../../gql/gql';

const GET_FILM = graphql(/* GraphQL */ `
  query GetFilm($filmId: ID) {
    film(id: $filmId) {
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

  return (
    <>
      <div>
        <h4>{data?.film?.title}</h4>
        <p>{data?.film?.releaseDate}</p>
      </div>
    </>
  );
};

export default GetFilm;
