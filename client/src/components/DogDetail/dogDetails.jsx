import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../Loading/loading.jsx";

export default function DogDetail() {
  const [dog, setDog] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios(`/dogs/${id}`).then((res) => setDog(res.data));
  }, [id]);

  let searchTemperaments =
    dog && dog.temperaments
      ? dog.temperaments.map((temperament) => {
          return temperament.name;
        })
      : "";

  return (
    <div>
      {dog ? (
        <div className="detailDog">
          <img src={dog[0] ? dog[0].image : dog.image} alt="Imagen" />
          <div>
            <h2>{dog[0] ? dog[0].name : dog.name}</h2>
            <p>
              Height:{" "}
              {dog[0]
                ? `${dog[0].height} cm`
                : `${dog.height_min} - ${dog.height_max} cm`}
            </p>
            <p>
              Weight:{" "}
              {dog[0]
                ? `${dog[0].weight} Kg`
                : `${dog.weight_min} - ${dog.weight_max} Kg`}
            </p>
            <p>
              Life span:{" "}
              {dog[0]
                ? dog[0].life_span
                : `${dog.years_min} - ${dog.years_max} years`}
            </p>
            <p>
              Temperaments:{" "}
              <span>
                {dog[0] ? dog[0].temperament : searchTemperaments.join(", ")}
              </span>
            </p>
          </div>
          <br />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
