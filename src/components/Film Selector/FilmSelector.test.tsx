import FilmSelector, { GET_FILMS } from './FilmSelector';
import { screen, render, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { vi } from 'vitest';

describe('FilmSelector', () => {
  const mockSetFilm = vi.fn();
  const mocks: any[] = [
    {
      request: {
        query: GET_FILMS,
      },
      result: {
        data: {
          allFilms: {
            films: [
              {
                id: 'ZmlsbXM6MQ==',
                episodeID: 4,
                title: 'A New Hope',
                __typename: 'Film',
              },
              {
                id: 'ZmlsbXM6Mg==',
                episodeID: 5,
                title: 'The Empire Strikes Back',
                __typename: 'Film',
              },
              {
                id: 'ZmlsbXM6Mw==',
                episodeID: 6,
                title: 'Return of the Jedi',
                __typename: 'Film',
              },
              {
                id: 'ZmlsbXM6NA==',
                episodeID: 1,
                title: 'The Phantom Menace',
                __typename: 'Film',
              },
              {
                id: 'ZmlsbXM6NQ==',
                episodeID: 2,
                title: 'Attack of the Clones',
                __typename: 'Film',
              },
              {
                id: 'ZmlsbXM6Ng==',
                episodeID: 3,
                title: 'Revenge of the Sith',
                __typename: 'Film',
              },
            ],
            __typename: 'FilmsConnection',
          },
        },
      },
    },
  ];

  it('renders without error', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <FilmSelector setFilm={mockSetFilm} />
      </MockedProvider>
    );

    expect(await screen.findByText(/a new hope/i)).toBeInTheDocument();
  });
});
