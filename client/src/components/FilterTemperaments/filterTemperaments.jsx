import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { filterTemp } from "../../store/actions/actions";

export default function TemperamentFilter() {
  let dispatch = useDispatch();

  const [dog, setDog] = useState({
    data: [],
    temperament: [],
  });

  let handleSelect = (e) => {
    e.preventDefault();
    let tempDogs =
      dog.data &&
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
  };

  const [temp, setTemp] = useState([]);

  useEffect(() => {
    axios("http://localhost:3001/api/temperaments").then((res) =>
      setTemp(res.data)
    );
  }, []);

  useEffect(() => {
    axios("http://localhost:3001/api/dogs/temps").then((res) =>
      setDog({ ...dog, data: res.data })
    );
  }, []);

  const handleDelete = (e) => {
    window.location.reload(true);
  };

  return (
    <div>
      <select onChange={(e) => handleSelect(e)}>
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

      {dog.temperament && dog.temperament.length !== 0 ? (
        dog.temperament.map((el) => <div key={el}>{el}</div>)
      ) : (
        <br />
      )}

      <button onClick={handleDelete}>Refresh</button>
    </div>
  );
}
