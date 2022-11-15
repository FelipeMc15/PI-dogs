import { useDispatch } from "react-redux";
import { dataPage, filterPeso } from "../../store/actions/actions";

export default function WeightFilter() {
  let dispatch = useDispatch();

  const handleSelect = (e) => {
    e.preventDefault();
    dispatch(filterPeso(e.target.value));
    dispatch(dataPage(1));
  };

  return (
    <div className="weight">
      <select onChange={(e) => handleSelect(e)} className="button">
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
