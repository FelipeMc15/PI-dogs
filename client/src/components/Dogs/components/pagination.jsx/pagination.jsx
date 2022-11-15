import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataPage } from "../../../../store/actions/actions";
import styles from "./pagination.module.css";

export default function Buttons() {
  let dispatch = useDispatch();
  let dog = useSelector((store) => store.filteredDogs);

  const [boton, setBoton] = useState([]);

  let pagination = (e) => {
    dispatch(dataPage(e));
  };

  useEffect(() => {
    let numButtons = () => {
      let num = dog && dog.length / 8;
      let num1 = Math.ceil(num);
      let arr = new Array(num1);
      for (let i = 0; i < arr.length; i++) {
        arr[i] = i;
      }
      return setBoton(arr);
    };
    dog && numButtons();
  }, [dog]);

  return (
    <div className={styles.div}>
      <br />
      {boton.map((item) => (
        <button
          onClick={() => pagination(item + 1)}
          className={styles.button}
          key={item}
        >
          {item + 1}
        </button>
      ))}
      <br />
      <br />
    </div>
  );
}
