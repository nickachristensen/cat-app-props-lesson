import CatsList from "./CatsList"
import CATS from "./db"

function App() {

  return (
    <div className="App">
      <h1>Cats App!</h1>
      <CatsList cats={CATS}/>
    </div>
  );
}

export default App;
