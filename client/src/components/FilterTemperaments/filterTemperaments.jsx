import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { dataPage, filterTemp } from "../../store/actions/actions";

export default function TemperamentFilter() {
  let dispatch = useDispatch();

  const [dog, setDog] = useState({
    data: [],
    temperament: [],
  });

  let handleSelect = (e) => {
    e.preventDefault();
    let tempDogs =
      dog.data.length !== 0 &&
      dog.data.filter((dog) => {
        return dog.temperament
          ? dog.temperament.includes(e.target.value)
          : dog.temperaments &&
              dog.temperaments.find((item) =>
                item.name.includes(e.target.value)
              );
      });
    setDog({
      ...dog,
      data: tempDogs,
      temperament: [...dog.temperament, e.target.value],
    });
    dispatch(filterTemp(tempDogs));
    dispatch(dataPage(1));
  };

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    axios("/temperaments").then((res) => setTemp(res.data));
  }, []);

  useEffect(() => {
    axios("/dogs").then((res) => setDog({ ...dog, data: res.data }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (e) => {
    window.location.reload(true);
  };

  return (
    <div className="all_temps">
      <div className="temps">
        <select onChange={(e) => handleSelect(e)} className="button">
          <option>Temperaments</option>
          {temp &&
            temp.map((tem) => {
              return (
                <option key={tem.name} name={tem.name}>
                  {tem.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="text_temperament" placeholder="Search...">
        <p>Selected:</p>
        {dog.temperament && dog.temperament.length !== 0 ? (
          dog.temperament.map((el) => <div key={el}>{el}</div>)
        ) : (
          <br />
        )}
      </div>
      <div className="refresh">
        <button onClick={handleDelete} className="buttonRefresh">
          Refresh
        </button>
      </div>
    </div>
  );
}
