import { useDispatch } from "react-redux";
import { dataPage, sort } from "../../store/actions/actions";
export const ASCENDENT = "ASCENDENT";
export const DESCENDENT = "DESCENDENT";

export default function Order() {
  let dispatch = useDispatch();

  const handleChange = () => {
    dispatch(sort());
    dispatch(dataPage(1));
  };

  return (
    <div className="order">
      <select name="select" onChange={handleChange} className="button">
        <option value={ASCENDENT}>Ascendent</option>
        <option value={DESCENDENT}>Descendent</option>
      </select>
    </div>
  );
}
