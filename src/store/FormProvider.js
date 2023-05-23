import { FormContext } from "./form-context";
import { useContext, useState } from "react";
import { DUMMY_MEDICINES } from "./CartProvider";

export const FormProvider = (props) => {
  const [form, setForm] = useState(DUMMY_MEDICINES);

  function addFormData(data) {
    let arr = [...form];
    console.log({ arr });
    arr.push(data);
    console.log({ arr });

    setForm(arr);
    // Store.addItem(data);
  }

  const formContext = {
    addItem: addFormData,
    data: form,
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export const useStoreForm = () => useContext(FormContext);
