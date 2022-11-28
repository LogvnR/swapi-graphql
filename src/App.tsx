import Film from './components/GetFilms';

const App = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen text-white bg-slate-600">
      <h1 className="mt-2">GraphQL Codegen Test</h1>

      {/* <Films title="Some title" /> */}
      <Film filmId="1" />
    </main>
  );
};

export default App;
