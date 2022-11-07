import { useDispatch, useSelector } from "react-redux";
import { api, database, fetchDogs } from "../../store/actions";

export default function FilterDbApi() {
  let dispatch = useDispatch();
  let page = useSelector((state) => state.page);

  const handleClick = (fn) => {
    dispatch(fn(page));
  };

  return (
    <div>
      <button onClick={() => handleClick(fetchDogs)}>All</button>
      <button onClick={() => handleClick(api)}>Api</button>
      <button onClick={() => handleClick(database)}>Database</button>
    </div>
  );
}
