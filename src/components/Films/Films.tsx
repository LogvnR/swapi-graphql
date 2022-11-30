import { useState } from 'react';
import FilmSelector from '../Film Selector/FilmSelector';
import Film from '../Get Films/GetFilms';

const Films = () => {
  const [userFilmSelect, setUserFilmSelect] = useState<string>('0');

  const liftedFilmId = (id: string) => {
    setUserFilmSelect(id);
  };
  return (
    <div>
      <FilmSelector setFilm={liftedFilmId} />
      {userFilmSelect === '0' ? (
        <p>Please Select A Film</p>
      ) : (
        <Film filmId={userFilmSelect} />
      )}
    </div>
  );
};

export default Films;
