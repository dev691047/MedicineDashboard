import { CartContext } from "./cart-context";

import { useContext, useReducer } from "react";

const defaultCartState = {
  cartItems: [],
  totalAmount: 0,
};

export const DUMMY_MEDICINES = [
  {
    id: "m1",
    name: "paracetamol",
    description: "to cure fever",
    price: 22.99,
  },
  {
    id: "m2",
    name: "acetaminophen",
    description: "used to treat mild to moderate pain",
    price: 16.5,
  },
];
DUMMY_MEDICINES.push({
  id: "mmmmm",
  name: "pa",
  description: "to cure fever",
  price: 22.99,
});

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    let findInd = state.cartItems.findIndex((val) => val.id === action.item.id);
    let updatedItems,
      totalItems = state.cartItems;
    if (findInd >= 0) {
      let it = state.cartItems[findInd];
      if (it.count) {
        it.count = parseInt(parseInt(it.count) + parseInt(action.item.count));
      } else it.count = parseInt(action.item.count);
      totalItems[findInd] = it;
      updatedItems = totalItems;
    } else {
      updatedItems = [...totalItems, action.item];
    }

    let updatedTotalAmount = 0;
    // we have id so we need to identify the name by id
    // so we need to find the price of maens from dummy array by using id
    console.log(DUMMY_MEDICINES);
    // for (let item of updatedItems) {
    //   let id = item.id;
    //   let filtered_item = DUMMY_MEDICINES.filter((item) => {
    //     return item.id === id;
    //   });

    //   let t = filtered_item[0].price * parseInt(item.count);
    //   updatedTotalAmount += t;
    //   console.log({ updatedTotalAmount, count: item.count, filtered_item, t });
    // }

    return {
      cartItems: updatedItems,
      totalAmount: updatedTotalAmount.toFixed(1),
    };
  } else if (action.type === "REMOVE") {
    let Removed_Items = state.cartItems.filter(
      (val) => val.id !== action.item.id
    );
    let total_amount = state.totalAmount - action.item.price;
    if (total_amount < 1) {
      total_amount = 0;
    }
    return {
      cartItems: Removed_Items,
      totalAmount: total_amount,
    };
  }
  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const cartContext = {
    cartItems: cartState.cartItems,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    medicines: DUMMY_MEDICINES,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useStore = () => useContext(CartContext);
