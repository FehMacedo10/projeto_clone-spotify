import ItemList from "./ItemList";
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = ({ type }) => {
  // Recebe o tipo de item a ser exibido
  return (
    <div className="main">
      {/* Item List de Artistas */}
      {type === "artists" || type === undefined ? ( // Verifica se o tipo é artists
        <ItemList
          title="Artistas"
          items={10}
          itemsArray={artistArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}
      {/* Item List de Músicas */}
      {type === "songs" || type === undefined ? ( // Verifica se o tipo é songs
        <ItemList
          title="Músicas"
          items={20}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
