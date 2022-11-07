import { useDispatch } from "react-redux";
import { filterPeso } from "../../store/actions";

export default function WeightFilter() {
  let dispatch = useDispatch();

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(filterPeso(e.target.value));
  };

  return (
    <div>
      <select onChange={(e) => handleSelect(e)}>
        <option key="heavier" name="heavier">
          Heavier
        </option>
        <option key="louder" name="louder">
          Louder
        </option>
      </select>
    </div>
  );
}
