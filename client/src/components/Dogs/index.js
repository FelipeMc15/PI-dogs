import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDogs } from "../../store/actions";
import Dog from "../Dog";

export default function Dogs() {
  let dog = useSelector((state) => state.filteredDogs);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDogs());
  }, []);

  return (
    <div>
      {dog.data
        ? dog.data.map((item) => {
            return (
              <div>
                <Dog
                  id={item.id}
                  name={item.name}
                  height={item.height}
                  weight={item.weight}
                  years={item.years}
                  image={item.image}
                  temperament={item.temperament || item.temperaments}
                />
              </div>
            );
          })
        : "Loading..."}
    </div>
  );
}
