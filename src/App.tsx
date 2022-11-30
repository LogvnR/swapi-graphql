import Films from './components/Films/Films';

const App = () => {
  return (
    <main className="flex flex-col items-center justify-between w-full h-screen text-white bg-slate-600">
      <h1 className="mt-2 text-red-300">GraphQL Codegen Test</h1>
      <Films />
    </main>
  );
};

export default App;
