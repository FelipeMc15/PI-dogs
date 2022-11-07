import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dogs, fetchDogs } from "../../store/actions";
import Dog from "../Dog";
import Buttons from "./components/pagination.jsx";

export default function Dogs() {
  let dog = useSelector((state) => state.filteredDogs);
  let page = useSelector((state) => state.page);
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDogs(page));
  }, [dispatch, page]);

  useEffect(() => {
    dispatch(dogs());
  }, [dispatch]);

  return (
    <div>
      {dog.data
        ? dog.data.map((item) => {
            return (
              <div>
                <Dog
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
        : "Loading..."}
      <Buttons page={page} />
    </div>
  );
}
