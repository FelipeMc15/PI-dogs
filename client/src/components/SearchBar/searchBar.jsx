import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../store/actions/actions";
import { ImSearch } from "react-icons/im";

export default function SearchBar() {
  const [search, setSearch] = useState("");

  let dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchDogs(search));
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} value={search} />
        <input type="submit" value="search" />
        <ImSearch />
      </form>
    </div>
  );
}
