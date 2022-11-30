import CatsList from "./CatsList"
import CATS from "./db"

function App() {

  return (
    <div className="App">
      <div id="headerDiv">
      <h1 id="header">Cats App!</h1>
      </div>
      <CatsList cats={CATS}/>
    </div>
  );
}

export default App;
