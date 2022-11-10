import WeightFilter from "../FilterWeight/filterWeight.jsx";
import Dogs from "../Dogs/dogs.jsx";
import Order from "../Order/order.jsx";
import TemperamentFilter from "../FilterTemperaments/filterTemperaments.jsx";
import FilterDbApi from "../FilterApiDb/filterApiDb.jsx";

export default function Home() {
  return (
    <div className="container_home">
      <FilterDbApi />
      <div className="view">
        <Order />
        <WeightFilter />
        <TemperamentFilter />
        <Dogs />
      </div>
    </div>
  );
}
