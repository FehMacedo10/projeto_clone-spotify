import SingleItem from "./SingleItem";
import { Link, useLocation } from "react-router-dom";

const ItemList = ({ title, items, itemsArray, path, idPath }) => { // Desconstruindo os parâmetros title, items, itemsArray, path e idPath do objeto props
  const { pathname } = useLocation(); 

  const isHome = pathname === "/"; // Verifica se a rota atual é a home
  const finalItems = isHome ? items : Infinity; // Se for a home, finalItems recebe o valor de items, senão, recebe Infinity

  return ( 
    <div className="item-list">
      <div className="item-list__header">
        <h2>{title} populares</h2>

        {isHome ? ( // Se for a home, renderiza o Link para a rota path
          <Link to={path} className="item-list__link">
            Mostrar tudo
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="item-list__container">
        {itemsArray
          .filter((currentValue, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              {...currObj}
              idPath={idPath}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
};

export default ItemList;
