import GetFilm, { GET_FILM } from './GetFilm';
import { screen, render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

describe('Gets Film', () => {
  const mocks: any[] = [
    {
      request: {
        query: GET_FILM,
        variables: {
          filmId: 'ZmlsbXM6MQ==',
        },
      },
      result: {
        data: {
          film: {
            title: 'A New Hope',
            episodeID: 4,
            releaseDate: '1977-05-25',
            __typename: 'Film',
          },
        },
      },
    },
  ];
  const mockFilmID = mocks[0].request.variables.filmId;

  it('renders component with data', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <GetFilm filmId={mockFilmID} />
      </MockedProvider>
    );

    expect(await screen.findByText('Loading...')).toBeInTheDocument();

    expect(await screen.findByText(/a new hope/i)).toBeInTheDocument();
  });
});
