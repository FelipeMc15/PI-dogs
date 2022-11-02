import { ASCENDENTE, DESCENDENTE } from "../../constantes/sort";
import { useDispatch } from "react-redux";
import { sort } from "../../store/actions";

export default function Order() {
  let dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(sort(e.target.value));
  };

  return (
    <select name="select" onChange={handleChange}>
      <option value={ASCENDENTE}>A - Z</option>
      <option value={DESCENDENTE}>Z - A</option>
    </select>
  );
}
