import { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDogs } from "../../store/actions/actions";
import { ImSearch, ImCross } from "react-icons/im";

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
    <div className="search_bar">
      <form onSubmit={handleSubmit} className="form">
        <input id="searchOne" type="checkbox" />
        <label htmlFor="searchOne">
          <i className="lup">
            <ImSearch />
          </i>
          <i className="x">
            <ImCross />
          </i>
          <p>|</p>
        </label>
        <input
          placeholder="Search..."
          type="text"
          onChange={handleChange}
          value={search}
        />
      </form>
    </div>
  );
}
