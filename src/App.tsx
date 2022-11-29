import { useState } from 'react';
import FilmSelector from './components/FilmSelector';
import Film from './components/GetFilms';

const App = () => {
  const [userFilmSelect, setUserFilmSelect] = useState<string>('ZmlsbXM6MQ==');

  const liftedFilmId = (id: string) => {
    setUserFilmSelect(id);
  };

  return (
    <main className="flex flex-col items-center justify-between w-full h-screen text-white bg-slate-600">
      <h1 className="mt-2">GraphQL Codegen Test</h1>
      {/* <FilmSelector liftFilmId={liftFilmId} /> */}

      <Film filmId={userFilmSelect} />

      <FilmSelector setFilm={liftedFilmId} />
    </main>
  );
};

export default App;
