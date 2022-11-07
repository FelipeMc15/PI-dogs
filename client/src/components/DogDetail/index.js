import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DogDetail() {
  const [dog, setDog] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios(`http://localhost:3001/api/dogs/${id}`).then((res) =>
      setDog(res.data)
    );
  }, []);

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
          <img src={dog[0] ? dog[0].image : dog.image} alt="Imagen" />
          <h3>{dog[0] ? dog[0].name : dog.name}</h3>
          <div>
            Height:{" "}
            {dog[0] ? dog[0].height : `${dog.height_min} - ${dog.height_max}`}
          </div>
          <br />
          <div>
            Weight:{" "}
            {dog[0] ? dog[0].weight : `${dog.weight_min} - ${dog.weight_max}`}
          </div>
          <br />
          <div>
            Life span:{" "}
            {dog[0]
              ? dog[0].life_span
              : `${dog.years_min} - ${dog.years_max} years`}
          </div>
          <br />
          <div>
            Temperaments:{" "}
            {dog[0] ? dog[0].temperament : searchTemperaments.join(", ")}
          </div>
          <br />
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
