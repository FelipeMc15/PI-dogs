import { useDispatch } from "react-redux";
import { sort } from "../../store/actions/actions";
export const ASCENDENT = "ASCENDENT";
export const DESCENDENT = "DESCENDENT";

export default function Order() {
  let dispatch = useDispatch();

  const handleChange = () => {
    dispatch(sort());
  };

  return (
    <select name="select" onChange={handleChange}>
      <option value={ASCENDENT}>Ascendent</option>
      <option value={DESCENDENT}>Descendent</option>
    </select>
  );
}
