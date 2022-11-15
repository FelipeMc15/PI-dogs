import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogs, fetchDogs } from "../../store/actions/actions";
import Dog from "../Dog/dog.jsx";
import Loading from "../Loading/loading.jsx";
import Buttons from "./components/pagination.jsx/pagination.jsx";

export default function Dogs() {
  let dog = useSelector((state) => state.filteredDogs);
  let page = useSelector((state) => state.page);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs());
    dispatch(dogs());
  }, [dispatch]);

  return (
    <div className="cards">
      {dog.length !== 0 ? (
        dog.slice(8 * (page - 1), 8 * page).map((item) => {
          return (
            <div>
              <Dog
                key={item.id}
                id={item.id}
                name={item.name}
                weight={
                  item.weight
                    ? item.weight
                    : `${item.weight_min} - ${item.weight_max}`
                }
                image={item.image}
                temperament={item.temperament || item.temperaments}
              />
            </div>
          );
        })
      ) : (
        <Loading />
      )}
      <Buttons />
    </div>
  );
}
