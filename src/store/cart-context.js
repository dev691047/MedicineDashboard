import { createContext } from "react";

export const CartContext = createContext({
  cartItems: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  medicines: [],
});
