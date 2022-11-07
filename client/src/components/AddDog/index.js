import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postDog } from "../../store/actions";

function validateForm(input) {
  let errors = {};

  if (!input.name) {
    errors.name = "You must type a name";
  } else {
    errors.name = "";
  }

  if (!input.image) {
    errors.image = "You must type a image";
  } else {
    errors.image = "";
  }

  if (!input.weight_min) {
    errors.weight_min = "Type a valid minimal weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_min)) {
    errors.weight_min = "Weight must have min values. Example: '25'";
  } else {
    errors.weight_min = "";
  }
  if (!input.weight_max) {
    errors.weight_max = "Type a valid maxim weight number";
  } else if (!/\d{1,2}/gi.test(input.weight_max)) {
    errors.weight_max = "Weight must have max values. Example: '25'";
  } else {
    errors.weight_max = "";
  }

  if (!input.height_min) {
    errors.height_min = "Type a valid minimal height number";
  } else if (!/\d{1,2}/gi.test(input.height_min)) {
    errors.height_min = "Height must have min values. Example: '25'";
  } else {
    errors.height_min = "";
  }
  if (!input.height_max) {
    errors.height_max = "Type a valid maxim height number";
  } else if (!/\d{1,2}/gi.test(input.height_max)) {
    errors.height_max = "Height must have max values. Example: '25'";
  } else {
    errors.height_max = "";
  }

  if (!input.years_min) {
    errors.years_min = "Type a valid minimal life span number";
  } else if (!/\d{1,2}/gi.test(input.years_min)) {
    errors.years_min = "Height must have min values. Example: '25'";
  } else {
    errors.years_min = "";
  }
  if (!input.years_max) {
    errors.years_max = "Type a valid maxim Life span number";
  } else if (!/\d{1,2}/gi.test(input.years_max)) {
    errors.years_max = "Life span must have max values. Example: '25'";
  } else {
    errors.years_max = "";
  }
  return errors;
}

export default function AddDog() {
  const [dog, setDog] = useState({
    name: "",
    image: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    years_min: "",
    years_max: "",
    temperament: [],
  });

  const [errors, setErrors] = useState({});
  const [temp, setTemp] = useState([]);

  function handleChange(e) {
    setDog({
      ...dog,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validateForm({
        ...dog,
        [e.target.name]: e.target.value,
      })
    );
  }

  let history = useHistory();
  let dispatch = useDispatch();

  useEffect(() => {
    axios("http://localhost:3001/api/temperaments").then((res) =>
      setTemp(res.data)
    );
  }, []);

  let handleSelect = (e) => {
    e.preventDefault();
    setDog({
      ...dog,
      temperament: [...dog.temperament, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !errors.name &&
      !errors.image &&
      !errors.weight_min &&
      !errors.height_min &&
      !errors.weight_max &&
      !errors.height_max
    ) {
      dispatch(postDog(dog));
      setDog({
        name: "",
        image: "",
        height_min: "",
        weight_min: "",
        height_max: "",
        weight_max: "",
        years_min: "",
        years_max: "",
        temperament: [],
      });
    } else {
      return alert("Something went wrong. Please try again.");
    }
    setTimeout(() => {
      history.push({
        pathname: "/",
      });
    }, 200);
  };

  function handleDelete(el) {
    setDog({
      ...dog,
      temperament: dog.temperament.filter((temp) => temp !== el),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        name="name"
        value={dog.name}
        type="text"
        onChange={(e) => handleChange(e)}
      />
      <div>
        <p>{errors.name}</p>
      </div>
      <label>Height </label>
      <br />
      <label>Min </label>
      <input
        name="height_min"
        value={dog.height_min}
        type="number"
        onChange={(e) => handleChange(e)}
        placeholder="10"
        required
      />
      <div>
        <p>{errors.height_min}</p>
      </div>
      <label>Max </label>
      <input
        name="height_max"
        value={dog.height_max}
        type="number"
        onChange={(e) => handleChange(e)}
        placeholder="20"
        required
      />
      <div>
        <p>{errors.height_max}</p>
      </div>
      <label>Weight </label>
      <br />
      <label>Min </label>
      <input
        name="weight_min"
        value={dog.weight_min}
        type="number"
        onChange={(e) => handleChange(e)}
        placeholder="10"
        required
      />
      <div>
        <p>{errors.weight_min}</p>
      </div>
      <label>Max </label>
      <input
        name="weight_max"
        value={dog.weight_max}
        type="number"
        onChange={(e) => handleChange(e)}
        placeholder="20"
        required
      />
      <div>
        <p>{errors.weight_max}</p>
      </div>
      <label>Life Span</label>
      <br />
      <label>Min </label>
      <input
        name="years_min"
        value={dog.years_min}
        type="number"
        onChange={handleChange}
        placeholder="10"
        required
      />
      <div>
        <p>{errors.years_min}</p>
      </div>
      <label>Max </label>
      <input
        name="years_max"
        value={dog.years_max}
        type="number"
        onChange={handleChange}
        placeholder="20"
        required
      />
      <div>
        <p>{errors.years_max}</p>
      </div>
      <label>Img: </label>
      <input
        name="image"
        value={dog.image}
        type="text"
        placeholder="http://myimageontheweb.com"
        onChange={(e) => handleChange(e)}
        required
      />
      <div>
        <p>{errors.image}</p>
      </div>
      <label>Temperaments: </label>
      <select onChange={(e) => handleSelect(e)}>
        {temp &&
          temp.map((tem) => {
            return (
              <option key={tem.name} name={tem.name}>
                {tem.name}
              </option>
            );
          })}
      </select>
      <h4>You have selected that:</h4>
      {dog.temperament && dog.temperament.length !== 0
        ? dog.temperament.map((el) => (
            <div key={el}>
              <button onClick={() => handleDelete(el)}>{el}</button>
            </div>
          ))
        : "Select a temperament"}
      <br />
      <br />
      <input type="submit" value="Create" />
      <br />
    </form>
  );
}
