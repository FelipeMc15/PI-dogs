import { useDispatch } from "react-redux";
import { api, database, fetchDogs } from "../../store/actions/actions";

export default function FilterDbApi() {
  let dispatch = useDispatch();

  const handleClick = (fn) => {
    dispatch(fn());
  };

  return (
    <div>
      <button onClick={() => handleClick(fetchDogs)}>All</button>
      <button onClick={() => handleClick(api)}>Api</button>
      <button onClick={() => handleClick(database)}>Database</button>
    </div>
  );
}
