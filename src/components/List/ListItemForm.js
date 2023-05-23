import { useState } from "react";

import classes from "./ListItemForm.module.css";
import { useStore } from "../../store/CartProvider";
import Input from "../UI/Input";

const ListItemForm = (props) => {
  const store = useStore();
  const [count, setCount] = useState();

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const updateItem = () => {
    store.addItem({ id: props.id, count });
    // console.log(store.medicines);
    // console.log(props.id);
  };

  const getVal = (value) => {
    setCount(value);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <Input
        getVal={getVal}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />

      <button onClick={updateItem}>+ Add</button>
    </form>
  );
};
export default ListItemForm;
