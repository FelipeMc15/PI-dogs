import WeightFilter from "../FilterWeight";
import Dogs from "../Dogs";
import Order from "../Order";
import SearchBar from "../SearchBar";
import TemperamentFilter from "../FilterTemperaments";
import FilterDbApi from "../FilterApiDb";

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
