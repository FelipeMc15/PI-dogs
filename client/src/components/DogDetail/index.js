import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function DogDetail() {
  const [dog, setDog] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/api/dogs/${id}`).then((res) =>
      setDog(res.data)
    );
  }, []);

  let history = useHistory();

  const onClick = (e) => {
    history.push({
      pathname: "/",
    });
  };

  let searchTemperaments =
    dog && dog.temperaments
      ? dog.temperaments.map((temperament) => {
          return temperament.name;
        })
      : "loading..";

  return (
    <div>
      {dog ? (
        <>
          <h3>{dog[0] ? dog[0].name : dog.name}</h3>
          <img src={dog[0] ? dog[0].image : dog.image} alt="Imagen" />
          <div>Height: {dog[0] ? dog[0].height : dog.height}</div>
          <br />
          <div>Weight: {dog[0] ? dog[0].weight : dog.weight}</div>
          <br />
          <div>Years: {dog[0] ? dog[0].years : dog.years}</div>
          <br />
          <div>
            Temperaments:{" "}
            {dog[0] ? dog[0].temperament : searchTemperaments.join(", ")}
          </div>
          <br />
          <button onClick={onClick}>Home</button>
          <br />
          <br />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
