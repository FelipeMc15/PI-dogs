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
        <img src={image} alt="img" />
        <br />
        <div>Name: {name}</div>
        <br />
        <div>
          Temperaments:{" "}
          {Array.isArray(temperament)
            ? temperament.map((temp) => temp.name).join(", ")
            : temperament}
          .
        </div>
        <br />
        <div>Weight: {weight}</div>
        <br />
        <div>{height ? `Height:  ${height} ${(<br />)}` : ""}</div>
        <div>{years ? `Life Span: ${years} ${(<br />)}` : ""}</div>
        <br />
      </Link>
    </div>
  );
}
