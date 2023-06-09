import "./App.css";
import { useGlobalContext } from "./context";
import Favorites from "./components/Favorites";
import Meals from "./components/Meals";
import Modal from "./components/Modal";
import Search from "./components/Search";

function App() {
  const { showModal, favorites } = useGlobalContext();
  return (
    <div className="App">
      {<Search />}
      {favorites.length>0 &&  <Favorites />}
      <Meals />
      {showModal && <Modal />}

      <h1>Meals app</h1>
    </div>
  );
}

export default App;
