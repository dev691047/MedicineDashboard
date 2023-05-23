import React from "react";
// import { useStore } from "../../store/CartProvider";
import ListItems from "./ListItems";
import { useStoreForm } from "../../store/FormProvider";

const List = () => {
  const formStore = useStoreForm();

  return (
    <>
      <ul>
        {formStore.data.map((med) => (
          <ListItems
            id={med.id}
            key={med.id}
            name={med.name}
            description={med.description}
            price={med.price}
          />
        ))}
      </ul>
    </>
  );
};

export default List;
