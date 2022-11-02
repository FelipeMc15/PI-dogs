import { Link } from "react-router-dom";

export default function Dog({
  name,
  height,
  weight,
  years,
  image,
  temperament,
  id,
}) {
  return (
    <div>
      <Link to={`/${id}`}>
        <div>Name: {name}</div>
        <img src={image} alt="img" />
        <br />
        <div>Height: {height}</div>
        <br />
        <div>Weight: {weight}</div>
        <br />
        <div>Years: {years}</div>
        <br />
        <div>
          Temperaments:{" "}
          {Array.isArray(temperament)
            ? temperament.map((temp) => temp.name).join(", ")
            : temperament}
          .
        </div>
        <br />
      </Link>
    </div>
  );
}
