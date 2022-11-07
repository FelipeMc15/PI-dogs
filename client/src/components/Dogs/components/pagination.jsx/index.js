import { useDispatch, useSelector } from "react-redux";
import { nextPage, previousPage } from "../../../../store/actions";

export default function Buttons({ page }) {
  let dispatch = useDispatch();
  const dog = useSelector((store) => store.filteredDogs);

  const handleClick = (fn) => {
    dispatch(fn());
  };

  return (
    <div>
      {dog.data && dog.data.length === 0 ? (
        <div>There are no dogs with these characteristics.</div>
      ) : (
        page
      )}
      <br />
      {page > 1 && (
        <button onClick={() => handleClick(previousPage)}>Previous</button>
      )}
      {dog.data && dog.data.length === 8 && (
        <button onClick={() => handleClick(nextPage)}>Next</button>
      )}
    </div>
  );
}
