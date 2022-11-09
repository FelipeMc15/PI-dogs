import { Link } from "react-router-dom";

export default function Dog({ name, weight, image, temperament, id }) {
  return (
    <div className="card" key={id}>
      <Link to={`/home/${id}`}>
        <img src={image} alt="img" width={"300px"} />
        <div>
          <h4>{name}</h4>
          <h5>Temperaments</h5>
          {Array.isArray(temperament) ? (
            <p>{temperament.map((temp) => temp.name).join(", ")}</p>
          ) : (
            <p>{temperament}</p>
          )}
          <h5>Weight</h5>
          <p>{weight} Kg</p>
        </div>
      </Link>
    </div>
  );
}
