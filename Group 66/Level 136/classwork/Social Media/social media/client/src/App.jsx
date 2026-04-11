import Register from "./pages/Register";

const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<p>Main</p>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default App;