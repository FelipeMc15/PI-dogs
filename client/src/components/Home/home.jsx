import WeightFilter from "../FilterWeight/filterWeight.jsx";
import Dogs from "../Dogs/dogs.jsx";
import Order from "../Order/order.jsx";
import SearchBar from "../SearchBar/searchBar.jsx";
import TemperamentFilter from "../FilterTemperaments/filterTemperaments.jsx";
import FilterDbApi from "../FilterApiDb/filterApiDb.jsx";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <Order />
      <WeightFilter />
      <FilterDbApi />
      <TemperamentFilter />
      <Dogs />
    </div>
  );
}
