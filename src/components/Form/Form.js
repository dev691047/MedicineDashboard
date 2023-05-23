import React, { useState } from "react";
import { useStoreForm } from "../../store/FormProvider";

const Form = () => {
  const formStore = useStoreForm();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [desc, setDesc] = useState("");
  function nameHandler(e) {
    setName(e.target.value);
  }
  function priceHandler(e) {
    setPrice(e.target.value);
  }
  function descHandler(e) {
    setDesc(e.target.value);
  }

  function formSubmit(e) {
    // console.log({ e });
    e.preventDefault();
  }

  function addIt() {
    let id = Math.floor(Math.random() * 100);
    id = id.toString();
    console.log({ id, name, desc, price });
    formStore.addItem({ id, name, desc, price });
  }

  return (
    <from onSubmit={formSubmit}>
      <input
        style={{ margin: "10px" }}
        type="text"
        placeholder="Medicine Name"
        value={name}
        onChange={nameHandler}
      />
      <input
        style={{ margin: "10px", width: "300px" }}
        type="text"
        placeholder="Description"
        value={desc}
        onChange={descHandler}
      />
      <input
        style={{ margin: "10px" }}
        type="number"
        placeholder="Price"
        value={price}
        onChange={priceHandler}
      />

      <button onClick={addIt}>SAVE</button>
    </from>
  );
};

export default Form;
