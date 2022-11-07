import { useDispatch } from "react-redux";
import { sort } from "../../store/actions";

export default function Order() {
  let dispatch = useDispatch();

  const handleChange = () => {
    dispatch(sort());
  };

  return (
    <select name="select" onChange={handleChange}>
      <option>Ascendent</option>
      <option>Descendent</option>
    </select>
  );
}
